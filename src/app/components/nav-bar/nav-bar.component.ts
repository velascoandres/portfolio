import { Component, OnInit } from '@angular/core';
import {MainComponent} from '../main/main.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    public readonly app: MainComponent,
  ) { }

  ngOnInit(): void {
  }

}
