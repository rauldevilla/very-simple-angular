import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appUser:string = "";
  appPassword:string = "";
  
  constructor (private router:Router) {

  }

  onClickHandler = (event:any) => {
    this.router.navigateByUrl('/home');
  }
}
