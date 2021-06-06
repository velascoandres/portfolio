import {Component, Input, OnInit} from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';

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

  @Input()
  icon: string;

  constructor(
    /*
        public readonly sideBar: SideBarComponent,
    */
    public readonly navBar: NavBarComponent,
  ) {
  }

  ngOnInit(): void {
  }


}
