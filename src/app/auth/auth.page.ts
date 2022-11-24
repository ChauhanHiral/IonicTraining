import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TimeoutError } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = false;
  constructor(private authService: AuthService,
     private router: Router,
     private loadingCtrl:LoadingController) {}

  ngOnInit() {}

  onSubmit(form:NgForm){
    if(!form.valid)
    {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email,password);
    if(this.isLogin)
    {
      //send a request to login servers

    }
    else
    {
      //send a requst to  signup server
    }
  }
  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({keyboardClose:true,message:'Logging in'}).then(loadingEle=>{
      loadingEle.present();
      setTimeout(()=>{
        this.isLoading = false;
        loadingEle.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      },1500)
    })

  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }
}
