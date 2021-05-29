import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-personal-projects-route',
  templateUrl: './personal-projects-route.component.html',
  styleUrls: ['./personal-projects-route.component.scss']
})
export class PersonalProjectsRouteComponent implements OnInit {

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Personal Projects');
  }


  ngOnInit(): void {
  }

}
