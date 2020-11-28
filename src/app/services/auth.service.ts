import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'https://cors-anywhere.herokuapp.com/http://13.93.70.220:30120/S2VAPI';
  token;

  constructor(private http: HttpClient, private router: Router) {}
  login() {
    var header = new HttpHeaders()
      .set('user', 'S2VTournament')
      .set('password', 'sogetispain');
    this.http
      .post(this.uri + '/authenticate', '', { headers: header })
      .subscribe((resp: any) => {
        // this.router.navigate(['profile']);
        localStorage.setItem('hackaton_token', resp.token);
      });
  }
  logout() {
    localStorage.removeItem('hackaton_token');
  }

  public get logIn(): boolean {
    return localStorage.getItem('hackaton_token') !== null;
  }
}
