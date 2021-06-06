import {Component, OnInit} from '@angular/core';
import {MainComponent} from '../main/main.component';
import {IRoute} from '../side-bar/side-bar.component';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  routes: IRoute[];
  selectedItem: string;

  constructor(
    public readonly app: MainComponent,
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
        label: 'experience',
        link: '/experience',
      },
      {
        label: 'skills',
        link: '/skills',
      },
      /*      {
              label: 'personal-projects',
              link: '/personal-projects',
            },*/
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
