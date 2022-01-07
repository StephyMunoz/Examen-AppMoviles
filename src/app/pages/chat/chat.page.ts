import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

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


  preimagen=false;


  public fileUrl : String = '';
  
  constructor
  (
    private chatService: ChatService, 
    public loadingCtrl: LoadingController,
    private router: Router, private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    
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
    console.log('1', this.UploadedImageURL);
    
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
    
  let file = (<HTMLInputElement>document.getElementById('file')).files[0];
  let ref = this.afStorage.ref('upload'+this.chatService.currentUser.uid+'/'+file.name);
  this.preimagen = true;
  ref.put(file).then(res=>{
    ref.getDownloadURL().subscribe(url=>{
      this.preimagen = false
      this.img = url
    });
  }).catch(err=>{
    console.log(err)
    this.preimagen = false;
  });
}


}
