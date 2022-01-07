import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CallbackID, Capacitor, PermissionState} from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
 
  messages: Observable<Message[]>;
  newMsg = '';
  coordinate: any;
  watchCoordinate: any;
  watchId: any;

  public fileUrl : String = '';
  
  constructor
  (
    private chatService: ChatService, 
    private router: Router, private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private zone: NgZone,
    
    ) { 
    this.isFileUploading = false;
    this.isFileUploaded = false;
    
    // Define uploaded files collection
    this.filesCollection = afs.collection<imgFile>('imagesCollection');
    this.files = this.filesCollection.valueChanges();
    }
    

  private filesCollection: AngularFirestoreCollection<imgFile>;
  
  
  // File upload task 
  fileUploadTask: AngularFireUploadTask;

  // Upload progress
  percentageVal: Observable<number>;

  // Track file uploading with snapshot
  trackSnapshot: Observable<any>;

  // Uploaded File URL
  UploadedImageURL: Observable<string>;

  // Uploaded image collection
  files: Observable<imgFile[]>;

  // Image specifications
  imgName: string;
  imgSize: number;

  // File uploading status
  isFileUploading: boolean;
  isFileUploaded: boolean;

  

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }

  uploadImage(event: FileList) {
    
      
    const file = event.item(0)

    // Image validation
    // if (file.type.split('/')[0] !== 'image') { 
    //   console.log('File type is not supported!')
    //   return;
    // }

    this.isFileUploading = true;
    this.isFileUploaded = false;

    this.imgName = file.name;

    // Storage path
    const fileStoragePath = `filesStorage/borja_lopez_munoz/${new Date().getTime()}_${file.name}`;

    // Image reference
    const imageRef = this.afStorage.ref(fileStoragePath);

    // File upload task
    this.fileUploadTask = this.afStorage.upload(fileStoragePath, file);

    // Show uploading progress
    this.percentageVal = this.fileUploadTask.percentageChanges();
    this.trackSnapshot = this.fileUploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        // Retreive uploaded image storage path
        this.UploadedImageURL = imageRef.getDownloadURL();
        
        this.UploadedImageURL.subscribe(resp=>{
          this.storeFilesFirebase({
            name: file.name,
            filepath: resp,
            size: this.imgSize
          });
          

          this.isFileUploading = false;
          this.isFileUploaded = true;
        },error=>{
          console.log(error);
        })
      }),
      tap(snap => {
          this.imgSize = snap.totalBytes;
      })
    )
    console.log('hii', imageRef.getDownloadURL());
    this.newMsg = ' ' + this.fileUrl;
    
}

storeFilesFirebase(image: imgFile) {
    const fileId = this.afs.createId();
    
    this.filesCollection.doc(fileId).set(image).then(res => {
      // console.log(res);
      // console.log('file', image.filepath);
      
      this.fileUrl = image.filepath;
    }).catch(err => {
      console.log(err);
    });
    console.log('fk', this.fileUrl)
}

async requestPermissions() {
  const permResult = await Geolocation.requestPermissions();
  console.log('Perm request result: ', permResult);
}

getCurrentCoordinate() {
  if (!Capacitor.isPluginAvailable('Geolocation')) {
    console.log('Plugin geolocation not available');
    return;
  }
  Geolocation.getCurrentPosition().then(data => {
    this.coordinate = {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      accuracy: data.coords.accuracy
    };
  }).catch(err => {
    console.error(err);
  });
}

watchPosition() {
  try {
    this.watchId = Geolocation.watchPosition({}, (position, err) => {
      console.log('Watch', position);
      this.zone.run(() => {
        this.watchCoordinate = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
      this.newMsg =  'Latitude: ' + this.watchCoordinate.latitude + ' Longitude: ' + position.coords.longitude;
    });
  } catch (e) {
    console.error(e);
  }
}

clearWatch() {
  if (this.watchId != null) {
    Geolocation.clearWatch({ id: this.watchId });
  }
}

async sendLocation() {
  this.watchPosition();
  console.log('hii', this.newMsg)
  if(this.newMsg !== ''){
    this.getLocation();
  } else {
    this.watchPosition();
  }

}

getLocation() {
  this.chatService.addChatMessage(this.newMsg).then(() => {
    this.newMsg = '';
    this.content.scrollToBottom();
  });
}


}
