import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


import { EducationRoutingModule } from './education-routing.module';
import { EducationRouteComponent } from './routes/education-route/education-route.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    EducationRouteComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    TimelineModule,
    SharedModule,
    CardModule,
    ButtonModule,
    TranslocoModule,
    SharedModule,
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'education'}],
})
export class EducationModule { }