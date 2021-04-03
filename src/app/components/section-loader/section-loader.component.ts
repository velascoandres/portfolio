import {Component, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-section-loader',
  templateUrl: './section-loader.component.html',
  styleUrls: ['./section-loader.component.scss']
})
export class SectionLoaderComponent implements OnInit {

  isLoading: boolean;

  constructor(
    private readonly router: Router,
  ) {
    this.router.events.subscribe((event: Event) => {
        console.log(event, event instanceof NavigationEnd);
        switch (true) {
          case event instanceof NavigationStart: {
            this.isLoading = true;
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.isLoading = false;
            break;
          }
          default: {
            break;
          }
        }
      },
    );
  }

  ngOnInit(): void {
  }

}
