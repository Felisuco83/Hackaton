import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()
export class RecursosService {
  private url: string;
  constructor(private _httpclient: HttpClient) {
    this.url = Global.url;
  }

  getUsers(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    let requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    var request = '/users';
    return this._httpclient.get(this.url + request, requestOptions);
  }

  getJobs(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    let requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    let request = '/jobs';
    return this._httpclient.get(this.url + request, requestOptions);
  }
}
