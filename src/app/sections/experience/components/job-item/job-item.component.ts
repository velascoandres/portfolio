import {Component, Input, OnInit} from '@angular/core';
import {IJob, IPosition} from '../../interfaces';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  @Input()
  job: IJob;

  @Input()
  company: string;

  @Input()
  positions: IPosition[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
