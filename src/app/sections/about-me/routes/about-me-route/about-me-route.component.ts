import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


interface IContact {
  type: string;
  redirectTo: string;
  iconUrl: string;
}

@Component({
  selector: 'app-about-me-route',
  templateUrl: './about-me-route.component.html',
  styleUrls: ['./about-me-route.component.scss']
})
export class AboutMeRouteComponent implements OnInit {


  contacts: IContact[] = [
    {
      type: 'github',
      redirectTo: 'https://github.com/velascoandres',
      iconUrl: 'assets/images/logos/companies/github.svg'
    },
    {
      type: 'linkedin',
      redirectTo: 'https://www.linkedin.com/in/andr%C3%A9s-velasco-210303135/',
      iconUrl: 'assets/images/logos/companies/linkedin.svg'
    },
    {
      type: 'twitter',
      redirectTo: 'https://twitter.com/Andres33033134',
      iconUrl: 'assets/images/logos/companies/twitter.svg'
    },
  ];


  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('About me');
  }

  ngOnInit(): void {
  }

}
