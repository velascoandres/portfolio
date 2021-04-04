import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoursesRouteComponent} from './routes/courses-route/courses-route.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesRouteComponent,
  },
  {
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
