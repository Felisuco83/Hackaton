import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class UserJobService {
  private url: string;
  constructor(private _httpclient: HttpClient) {
    this.url = Global.urlhackaton;
  }

  getUsers(): Observable<any> {
    var request = '/users';
    var header = new HttpHeaders().set(
      'access-token',
      localStorage.getItem('hackaton_token')
    );
    return this._httpclient.get(this.url + request, { headers: header });
  }

  getSingleUser(
    name: string,
    firstname: string,
    secondname: string
  ): Observable<any> {
    var request = '/users';
    var header = new HttpHeaders().set(
      'access-token',
      localStorage.getItem('hackaton_token')
    );
    if (name != '') {
      // header.append('name', name);
      header = new HttpHeaders()
        .set('access-token', localStorage.getItem('hackaton_token'))
        .set('name', name);
    }
    if (firstname != '') {
      // header.append('firstname', firstname);
      header = new HttpHeaders()
        .set('access-token', localStorage.getItem('hackaton_token'))
        .set('firstname', firstname);
    }
    if (secondname != '') {
      // header.append('secondname', secondname);
      header = new HttpHeaders()
        .set('access-token', localStorage.getItem('hackaton_token'))
        .set('secondname', secondname);
    }
    return this._httpclient.get(this.url + request, { headers: header });
  }

  getJobs(): Observable<any> {
    var request = '/jobs';
    var header = new HttpHeaders().set(
      'access-token',
      localStorage.getItem('hackaton_token')
    );
    return this._httpclient.get(this.url + request, { headers: header });
  }
}
