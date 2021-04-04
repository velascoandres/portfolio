import {Component, OnInit} from '@angular/core';
import {ICourse} from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: ICourse[] = [
    {
      credentialId: 'UC-e66ca2ab-299b-45d5-98c1-2e53db85ae9d',
      expeditionDate: '06-02-2021',
      title: 'Flutter Avanzado: Lleva tu conocimiento al siguiente nivel',
      platform: 'udemy',
    },
    {
      credentialId: 'UC-6672e0ca-90cc-49a8-b80c-e2c68316b504',
      expeditionDate: '08-11-2020',
      title: ' Flutter: Tu guía completa de desarrollo para IOS y Android',
      platform: 'udemy',
    },
    {
      credentialId: 'HQNZYNFTLQ8A',
      expeditionDate: '03-08-2020',
      title: 'App Deployment, Debugging, and Performance',
      platform: 'coursera',
    },
    {
      credentialId: 'LQC2NC9JF9SX',
      expeditionDate: '03-08-2020',
      title: 'Developing Applications with Google Cloud Platform',
      platform: 'coursera',
    },
    {
      credentialId: 'JCH5436R4UKF',
      expeditionDate: '02-08-2020',
      title: 'Securing and Integrating Components of your Application',
      platform: 'coursera',
    },
    {
      credentialId: 'SYNG74EL3YUM',
      expeditionDate: '31-07-2020',
      title: 'Getting Started With Application Development',
      platform: 'coursera',
    },
    {
      credentialId: 'XLAJQ3SUNBNJ',
      expeditionDate: '29-07-2020',
      title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
      platform: 'coursera',
    },
    {
      credentialId: 'UC-45568fec-f60d-4daf-92e8-74a6e1622303',
      expeditionDate: '24-07-2020',
      title: 'REDUX en Angular con NGRX: Desde las bases hasta la práctica',
      platform: 'udemy',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
