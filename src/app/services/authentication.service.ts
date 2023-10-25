import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = "https://ryxzuzqv3sreckmo5vma76pi5i0lkrbb.lambda-url.us-east-2.on.aws/";

  constructor() { }

  authenticate = (login:string, password:string): Observable<any> => {
    const headers = {
      'api-key': '23b90a5-7770-4b86-98a1-d78b597e431'
    };
    const body = {
      "login": login,
      "password": password
    };
    return new Observable<any>((observer) => {
      fetch(this.apiUrl, {
      method: "POST",
        body: JSON.stringify(body),
        headers: headers
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in API response");
        }
      })
      .then(data => {
        observer.next(data);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
    });
  }

}
