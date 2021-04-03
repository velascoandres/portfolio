import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationRouteComponent } from './routes/education-route/education-route.component';


@NgModule({
  declarations: [
    EducationRouteComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
