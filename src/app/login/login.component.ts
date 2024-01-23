import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginViewModel:LoginViewModel = new LoginViewModel()
  loginError:string=''
  constructor(private loginService:LoginService, private router:Router){

  }
  ngOnInit() {
    
  }
  onLoginClick(event:any){

    console.log(this.loginService)
    this.loginService.Login(this.loginViewModel).subscribe({
      next: (response)=>{
          this.router.navigateByUrl('/Dashboard')
      },
      error:(error)=>{
        console.log(error)
        this.loginError= "Invalid UserName Or Password";
      }
    })
  }
}
