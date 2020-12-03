import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserJobService } from '../../services/usersjobs.service';
import { UserModel } from '../../models/user';
import * as $ from 'jquery';
import { JobModel } from '../../models/job';
import { JobGrade } from '../../models/jobgrade';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

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
  public currentJob: JobModel;
  public popoverContent: string;
  public allJobs: Array<JobModel>;
  public currentJobGrade: JobGrade;
  public userByPlate: UserModel;
  public usuariosAux: Array<UserModel>;
  @ViewChild('searchInput') term: ElementRef;
  @ViewChild('popover') public popover: NgbPopover;
  constructor(private _service: UserJobService) {
    this.usuarios = new Array<UserModel>();
    this.usersByName = new Array<UserModel>();
    this.usersByFirstName = new Array<UserModel>();
    this.usersBySecondName = new Array<UserModel>();
    this.currentJob = new JobModel('', '', [
      new JobGrade(0, 0, '', '', '', '', ''),
    ]);
    this.usuarios = new Array<UserModel>();
    this.popoverContent = '';
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
  getAllJobsAndSetCurrentJob(jobtype, jobgrade, popover: NgbPopover) {
    this._service.getJobs().subscribe(
      (resp) => {
        this.allJobs = resp;
        this.currentJob = Object.values(this.allJobs).filter(
          (xx) => xx.name === jobtype
        )[0];
        this.currentJobGrade = Object.values(this.currentJob.job_grades).filter(
          (jg) => jg.grade === jobgrade
        )[0];
        this.popoverContent =
          this.currentJob.label +
          ', salario: ' +
          this.currentJobGrade.salary.toString();
        setTimeout(function () {
          if (popover.isOpen()) {
            popover.close();
          } else {
            popover.open();
          }
        }, 25);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserByPlate() {
    var plate = this.term.nativeElement.value;
    this._service.getUsers().subscribe(
      (resp) => {
        this.usuariosAux = resp;
        this.userByPlate = Object.values(this.usuariosAux).filter(
          (xx) => xx.vehicles.plate === plate
        )[0];
        this.usuarios = new Array<UserModel>();
        this.usuarios.push(this.userByPlate);
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
