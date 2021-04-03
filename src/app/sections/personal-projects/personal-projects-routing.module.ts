import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalProjectsRouteComponent} from './routes/personal-projects-route/personal-projects-route.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalProjectsRouteComponent,
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
export class PersonalProjectsRoutingModule { }
