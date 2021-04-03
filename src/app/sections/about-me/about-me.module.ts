import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutMeRouteComponent} from './routes/about-me-route/about-me-route.component';
import {AboutMeRoutingModule} from './about-me-routing.module';

import {
  TRANSLOCO_SCOPE,
  TranslocoModule,
} from '@ngneat/transloco';


@NgModule({
  declarations: [
    AboutMeRouteComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    TranslocoModule,
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'about'}],
})
export class AboutMeModule {
}
