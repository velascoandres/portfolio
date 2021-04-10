import {Component, Input, OnInit} from '@angular/core';
import {IJob} from '../../interfaces';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input()
  jobs: IJob[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
