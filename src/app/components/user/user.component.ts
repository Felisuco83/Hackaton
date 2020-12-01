import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserJobService } from '../../services/usersjobs.service';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public usuarios: Array<UserModel>;
  public usersByName: Array<UserModel>;
  public usersByFirstName: Array<UserModel>;
  public usersBySecondName: Array<UserModel>;
  @ViewChild('searchInput') term: ElementRef;
  constructor(private _service: UserJobService) {
    this.usuarios = new Array<UserModel>();
    this.usersByName = new Array<UserModel>();
    this.usersByFirstName = new Array<UserModel>();
    this.usersBySecondName = new Array<UserModel>();
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this._service.getUsers().subscribe(
      (resp) => {
        this.usuarios = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  performSearch() {
    // this.usuarios = new Array<UserModel>();
    if (this.term.nativeElement.value != '') {
      this._service
        .getSingleUser(this.term.nativeElement.value, '', '')
        .subscribe(
          (resp) => {
            this.usersByName = resp;
            console.log(resp);
          },
          (error) => {
            console.log(error);
          }
        );
      this._service
        .getSingleUser('', this.term.nativeElement.value, '')
        .subscribe(
          (resp) => {
            this.usersByFirstName = resp;
          },
          (error) => {
            console.log(error);
          }
        );
      this._service
        .getSingleUser('', '', this.term.nativeElement.value)
        .subscribe(
          (resp) => {
            this.usersBySecondName = resp;
            this.usuarios = this.usersByName
              .concat(this.usersByFirstName)
              .concat(this.usersBySecondName);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.getAllUsers();
    }
  }
}
