import { Component, OnInit } from '@angular/core';
import { JobModel } from 'src/app/models/job';
import { UserJobService } from '../../services/usersjobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  public jobs: Array<JobModel>;
  constructor(private _service: UserJobService) {}

  ngOnInit(): void {
    this._service.getJobs().subscribe(
      (resp) => {
        this.jobs = resp;
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
