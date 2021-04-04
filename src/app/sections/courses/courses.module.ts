import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CoursesRouteComponent} from './routes/courses-route/courses-route.component';
import {CourseItemComponent} from './components/course-item/course-item.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';


@NgModule({
  declarations: [
    CoursesRouteComponent,
    CourseItemComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TranslocoModule,
  ],
  providers: [{provide: TRANSLOCO_SCOPE, useValue: 'courses'}],

})
export class CoursesModule {
}
