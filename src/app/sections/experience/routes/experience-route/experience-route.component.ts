import {Component, OnInit} from '@angular/core';
import { IPosition} from '../../interfaces';
import {JOBS} from '../../constants/jobs';

@Component({
  selector: 'app-experience-route',
  templateUrl: './experience-route.component.html',
  styleUrls: ['./experience-route.component.scss']
})
export class ExperienceRouteComponent implements OnInit {

  jobs: IPosition[] = JOBS;


  constructor() {
  }

  ngOnInit(): void {
  }

}
