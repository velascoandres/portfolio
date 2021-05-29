import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {IPosition} from '../../interfaces';
import {JOBS} from '../../constants/jobs';

@Component({
  selector: 'app-experience-route',
  templateUrl: './experience-route.component.html',
  styleUrls: ['./experience-route.component.scss']
})
export class ExperienceRouteComponent implements OnInit {

  jobs: IPosition[] = JOBS;


  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Experience');
  }

  ngOnInit(): void {
  }

}
