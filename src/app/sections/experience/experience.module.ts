import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceRouteComponent } from './routes/experience-route/experience-route.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobItemComponent } from './components/job-item/job-item.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExperienceRouteComponent,
    JobsListComponent,
    JobItemComponent
  ],
    imports: [
        CommonModule,
        ExperienceRoutingModule,
        TranslocoModule,
        SharedModule
    ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'experience',
    }
  ]
})
export class ExperienceModule { }
