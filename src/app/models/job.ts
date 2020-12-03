import { JobGrade } from './jobgrade';

export class JobModel {
  constructor(public label, public name, public job_grades: Array<JobGrade>) {}
}
