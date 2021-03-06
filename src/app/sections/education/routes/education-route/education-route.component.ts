import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {Title} from '@angular/platform-browser';
import {IEvent} from '../../components/education-list/education-list.component';


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
        description: 'montufar.description',
        city: 'Quito-Ecuador',
      },
      {
        status: 'poli.name',
        dates: '2014 - 2021',
        icon: PrimeIcons.PAPERCLIP,
        color: '#ffffff',
        image: 'epn.png',
        description: 'poli.description',
        city: 'Quito-Ecuador',
      },
    ];
  }

}
