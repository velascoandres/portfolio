import {Component, Input, OnInit} from '@angular/core';
import {HashMap} from '@ngneat/transloco/lib/types';

@Component({
  selector: 'app-contact-icon',
  templateUrl: './contact-icon.component.html',
  styleUrls: ['./contact-icon.component.scss']
})
export class ContactIconComponent implements OnInit {

  @Input() tooltip: string;
  @Input() url: string;
  @Input() redirectTo: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    window.open(this.redirectTo, 'blank');
  }

}
