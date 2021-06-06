import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeRouteComponent} from './routes/about-me-route/about-me-route.component';
import {AboutMeRoutingModule} from './about-me-routing.module';

import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
} from '@ngneat/transloco';
import {TooltipModule} from 'primeng/tooltip';
import { ContactIconComponent } from './components/contact-icon/contact-icon.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    AboutMeRouteComponent,
    ContactIconComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    TranslocoModule,
    TooltipModule,
    SharedModule,
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'about'}],
})
export class AboutMeModule {
}
