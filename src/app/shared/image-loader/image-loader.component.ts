import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageLoaderComponent implements OnInit {

  @Input()
  styleClass: string;

  @Input()
  styles: string;

  @Input()
  src: string;

  hasLoaded: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
