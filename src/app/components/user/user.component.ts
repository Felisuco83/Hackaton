import { Component, OnInit } from '@angular/core';
import { UserJobService } from '../../services/usersjobs.service';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public usuarios: Array<UserModel>;
  public usuario1: UserModel;
  public usuario2: UserModel;
  public usuario3: UserModel;
  constructor(private _service: UserJobService) {}

  ngOnInit(): void {
    this._service.getUsers().subscribe(
      (resp) => {
        this.usuarios = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    this._service.getSingleUser('', '', 'Montoya').subscribe(
      (resp) => {
        this.usuario1 = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    this._service.getSingleUser('', 'White', '').subscribe(
      (resp) => {
        this.usuario2 = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
    this._service.getSingleUser('Tururu', '', '').subscribe(
      (resp) => {
        this.usuario3 = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
