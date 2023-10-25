import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appUser:string = "raul.devilla@gmail.com";
  appPassword:string = "";
  
  constructor (private router:Router, private authenticationService:AuthenticationService) {

  }

  onClickHandler = (event:any) => {

    this.authenticationService.authenticate(this.appUser, this.appPassword).subscribe({
     next : (data) => {
        const token = data.token;
        console.log('Token', token);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.log('Error authenticating', error);
      }
    });
  }
}
