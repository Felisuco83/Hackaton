import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Global } from './global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  login() {
    var header = new HttpHeaders()
      .set('user', 'S2VTournament')
      .set('password', 'sogetispain');
    this.http
      .post(Global.urlhackaton + '/authenticate', '', { headers: header })
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
