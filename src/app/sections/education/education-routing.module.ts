import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EducationRouteComponent} from './routes/education-route/education-route.component';

const routes: Routes = [
  {
    path: '',
    component: EducationRouteComponent,
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
export class EducationRoutingModule { }
