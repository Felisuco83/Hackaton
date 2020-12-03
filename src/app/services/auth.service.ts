import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'http://13.93.70.220:30120/S2VAPI';
  token;

  constructor(private http: HttpClient, private router: Router) {}

  login(user, password) {
    let auth = false;
    var header = new HttpHeaders().set('user', user).set('password', password);
    this.http
      .post(this.uri + '/authenticate', '', { headers: header })
      .subscribe((resp: any) => {
        // this.router.navigate(['profile']);
        localStorage.setItem('hackaton_token', resp.token);
        if (
          localStorage.getItem('hackaton_token') !== null &&
          localStorage.getItem('hackaton_token') !== 'undefined'
        ) {
          console.log(localStorage.getItem('hackaton_token'));
          this.router.navigate(['/users']);
        }
      });
    return auth;
  }

  logout() {
    localStorage.removeItem('hackaton_token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('hackaton_token') !== null;
  }
}
