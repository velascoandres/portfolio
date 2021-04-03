import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  selectedItem: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  listenSelectedItem(url: string): void {
    this.selectedItem = url;
  }

}
