import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  selectItem: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public readonly sideBar: SideBarComponent
  ) {
  }

  ngOnInit(): void {
  }

  emitSelectedItem(link: string): void {
    this.selectItem.emit(link);
  }

}
