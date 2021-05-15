import {Component, Input, OnInit} from '@angular/core';
import {IJob, PositionsMap} from '../../interfaces';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input()
  jobs: IJob[];

  positionsMap: PositionsMap;
  companies: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.positionsMap = this.jobs.reduce(
      (positionMap: PositionsMap, job: IJob) => {
        const positions = [
          ...(positionMap[job.companyCode] ?? []),
        ];
        positionMap[job.companyCode] = [
          ...positions,
          job,
        ];
        this.companies.push(job.companyCode);
        return positionMap;
      },
      {}
    );
    this.companies = Object.keys(this.positionsMap);
  }

}
