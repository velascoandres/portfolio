import {Component, Input, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';

export interface IEvent {
  status: string;
  dates: string;
  icon: PrimeIcons;
  color: string;
  image: string;
  description: string;
  city: string;
}


@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {

  @Input()
  events: IEvent[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
