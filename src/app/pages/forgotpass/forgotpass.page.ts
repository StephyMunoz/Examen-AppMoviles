import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
  providers: [AuthService],
})
export class ForgotpassPage implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit() {
  }

  async onReset() {
    
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Email sent, check your inbox');
      this.router.navigate(['/']);
    } catch (error){
      console.log(error);
    }
    
  }

}
