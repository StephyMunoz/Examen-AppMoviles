import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent, LoadingController, AlertController} from '@ionic/angular';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
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
  img = '';
  msgEncryption:'';
  newFile='';
  coordinate: any;
  watchCoordinate: any;
  watchId: any;


  preimagen=false;


  public fileUrl : String = '';
  
  constructor
  (
    private chatService: ChatService, 
    public loadingCtrl: LoadingController,
    private router: Router, private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private zone: NgZone,
    public alertController: AlertController

    
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

    this.chatService.addChatMessages(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });

  }
  async sendImage(){  
    const loading = await this.loadingCtrl.create();

    //this.msgEncryption = CryptoJS.AES.encrypt(this.newMsg.trim(),this.passwordAES.trim()).toString();
    /*if (this.newFile !== undefined){
      await loading.present();
      const res = await this.autservice.uploadImage(this.newFile, "/Messages", this.autservice.currentUser.uid);
      this.img = res;
      this.preimagen=false;
    }*/
    this.chatService.addChatMessage(this.newMsg, this.img).then(() => {
      this.newMsg = '';
      this.msgEncryption='';
      this.img = '';
      this.newFile='';
      this.content.scrollToBottom();
      loading.dismiss();

  })
}

async sendFile(){  
  const loading = await this.loadingCtrl.create();

  //this.msgEncryption = CryptoJS.AES.encrypt(this.newMsg.trim(),this.passwordAES.trim()).toString();
  /*if (this.newFile !== undefined){
    await loading.present();
    const res = await this.autservice.uploadImage(this.newFile, "/Messages", this.autservice.currentUser.uid);
    this.img = res;
    this.preimagen=false;
  }*/
  this.chatService.addChatMessage(this.newMsg, this.img).then(() => {
    this.newMsg = '';
    this.msgEncryption='';
    this.img = '';
    this.newFile='';
    this.content.scrollToBottom();
    loading.dismiss();

})
}

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }

  uploadImage(event: FileList) {
      
    const file = event.item(0);

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
    console.log('1', this.UploadedImageURL);
    
}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Solo imagenes',
    message: 'Solo puedes subir im??genes. Para subir archivos dir??gete al ??cono del clip',
    buttons: ['OK']
  });

  await alert.present();
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

upload(){

  // Image validation
    
    
  let file = (<HTMLInputElement>document.getElementById('file')).files[0];
  if (file.type.split('/')[0] !== 'image') { 
    console.log('File type is not supported!');
   return this.presentAlert();
   }
  let ref = this.afStorage.ref('upload'+this.chatService.currentUser.uid+'/'+file.name);
  this.preimagen = true;
  ref.put(file).then(res=>{
    ref.getDownloadURL().subscribe(url=>{
      this.preimagen = false
      this.img = url;
      
    });
    
  }).catch(err=>{
    console.log(err);
    this.preimagen = false;
  });
}

uploadFiles(){
    
  let file = (<HTMLInputElement>document.getElementById('attachfile')).files[0];
  let ref = this.afStorage.ref('upload'+this.chatService.currentUser.uid+'/'+file.name);
  this.preimagen = true;
  ref.put(file).then(res=>{
    ref.getDownloadURL().subscribe(url=>{
      this.preimagen = true
      this.img = url
      console.log('j', url)
      this.newMsg = url;
    });
  
    
  }).catch(err=>{
    console.log(err)
    this.preimagen = false;
  });
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
  this.chatService.addChatMessages(this.newMsg).then(() => {
    this.newMsg = '';
    this.content.scrollToBottom();
  });
}

}