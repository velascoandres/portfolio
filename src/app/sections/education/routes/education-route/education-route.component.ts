import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {Title} from '@angular/platform-browser';

interface IEvent {
  status: string;
  dates: string;
  icon: PrimeIcons;
  color: string;
  image: string;
  description: string;
}


@Component({
  selector: 'app-education-route',
  templateUrl: './education-route.component.html',
  styleUrls: ['./education-route.component.scss']
})
export class EducationRouteComponent implements OnInit {

  events: IEvent[];

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Education');
  }


  ngOnInit(): void {
    this.events = [
      {
        status: 'montufar.name',
        dates: '2008 - 2014',
        icon: PrimeIcons.BOOK,
        color: '#ffffff',
        image: 'mh.png',
        description: 'montufar.description'
      },
      {
        status: 'poli.name',
        dates: '2014 - 2021',
        icon: PrimeIcons.PAPERCLIP,
        color: '#ffffff',
        image: 'epn.png',
        description: 'poli.description'
      },
    ];
  }

}
