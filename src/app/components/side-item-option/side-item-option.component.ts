import {Component, Input, OnInit} from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';

@Component({
  selector: 'app-side-item-option',
  templateUrl: './side-item-option.component.html',
  styleUrls: ['./side-item-option.component.scss']
})
export class SideItemOptionComponent implements OnInit {

  @Input()
  label: string;
  @Input()
  link: string;

  @Input()
  isSelected: boolean;
  constructor(
    public readonly sideBar: SideBarComponent
  ) {
  }

  ngOnInit(): void {
  }


}
