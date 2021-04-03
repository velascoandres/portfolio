import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceRouteComponent } from './routes/experience-route/experience-route.component';


@NgModule({
  declarations: [
    ExperienceRouteComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }
