import { Component } from "@angular/core";
import { LoginSignUpService } from "../../providers/login.service";
import { Router } from "@angular/router";

@Component({
    selector : 'login-signup',
    templateUrl : 'login-signup.component.html',
    styleUrls : [ 'login-signup.component.css' ],
    providers : [ LoginSignUpService ]
})
export class LoginSignUpComponent{
    loginCheck : boolean = true;
    message = '';
    loginForm = {
        username : '',
        password : ''
    };
    signUpForm = {
        name : '',
        password : '',
        email : '',
        location : '',
        phone : null,
        confirmPassword : ''
    }
    constructor( private lss : LoginSignUpService, private router : Router){

    }

    login(){
        if(this.loginForm.username.indexOf('@')!=-1){
            this.loginForm['email'] = this.loginForm.username;
        }else{
            this.loginForm['phone'] = this.loginForm.username;
        }
        delete this.loginForm.username;
        this.lss.login(this.loginForm).subscribe((res:any)=>{
            console.log(res);
            this.message = res.message;
            localStorage.setItem('id',res.data._id);
            localStorage.setItem('appointer-token',res.token);
            localStorage.setItem('name',res.data.name);
            localStorage.setItem('email',res.data.email);
            localStorage.setItem('phone',res.data.phone);
            localStorage.setItem('location',res.data.location);
            this.router.navigate(['profile']);
        },(err:any)=>{

        })
    }

    signUp(){
        this.lss.signup(this.signUpForm).subscribe((res:any)=>{
            console.log(res);
            this.message = res.message;
        },(err:any)=>{

        })
    }
}