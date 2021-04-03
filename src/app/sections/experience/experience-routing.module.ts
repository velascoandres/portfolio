import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExperienceRouteComponent} from './routes/experience-route/experience-route.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceRouteComponent,
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
export class ExperienceRoutingModule { }
