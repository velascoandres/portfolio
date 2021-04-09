import {Component, OnInit, ViewChild} from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('sideBar') sideBar: SideBarComponent;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.sideBar.toggle();
  }

}
