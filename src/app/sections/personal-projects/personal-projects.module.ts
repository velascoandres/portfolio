import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalProjectsRoutingModule } from './personal-projects-routing.module';
import { PersonalProjectsRouteComponent } from './routes/personal-projects-route/personal-projects-route.component';


@NgModule({
  declarations: [
    PersonalProjectsRouteComponent
  ],
  imports: [
    CommonModule,
    PersonalProjectsRoutingModule
  ]
})
export class PersonalProjectsModule { }
