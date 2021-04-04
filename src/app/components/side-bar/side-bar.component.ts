import {Component, OnInit} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

export interface IRoute {
  label: string;
  link: string;
}


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  selectedItem: string;

  routes: IRoute[];

  constructor(
    private readonly router: Router,
  ) {
    this.routes = [
      {
        label: 'about-me',
        link: '/about-me',
      },
      {
        label: 'education',
        link: '/education',
      },
      {
        label: 'courses',
        link: '/courses',
      },
      {
        label: 'experience',
        link: '/experience',
      },
      {
        label: 'skills',
        link: '/skills',
      },
      {
        label: 'personal-projects',
        link: '/personal-projects',
      },
    ];
    this.handleRoute();
  }

  private handleRoute(): void {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          this.selectedItem = event.url;
        }
      },
    );
  }

  ngOnInit(): void {
  }

}
