import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('user') user: ElementRef;
  @ViewChild('password') password: ElementRef;
  auth = true;

  constructor(private _service: AuthService) {}

  logIn() {
    let usr = this.user.nativeElement.value;
    let pass = this.password.nativeElement.value;
    let cnt = 0;
    this.auth = this._service.login(usr, pass);
  }

  ngOnInit(): void {}
}
