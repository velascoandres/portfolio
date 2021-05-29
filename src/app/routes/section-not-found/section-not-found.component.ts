import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-section-not-found',
  templateUrl: './section-not-found.component.html',
  styleUrls: ['./section-not-found.component.scss']
})
export class SectionNotFoundComponent implements OnInit {

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Not Found');
  }

  ngOnInit(): void {
  }

}
