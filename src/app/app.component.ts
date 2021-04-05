import {Component, ViewChild} from '@angular/core';
import {SideBarComponent} from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sideBar') sideBar: SideBarComponent;

  title = 'portfolio';

  toggle(): void {
    this.sideBar.toggle();
  }

}
