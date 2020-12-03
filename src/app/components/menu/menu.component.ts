import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';
import { AuthService } from '../../services/auth.service';
import { RecursosService } from '../../services/recursos.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public users: Array<Object>;
  constructor(
    private _service: AuthService,
    private _consultas: RecursosService
  ) {}

  cargarDatos() {
    this._consultas.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._service.login();
    this.cargarDatos();
  }
}
