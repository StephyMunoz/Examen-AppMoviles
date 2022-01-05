import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async resetPassword(email: string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    } catch(error){
      console.log(error);
    }
  }
}
