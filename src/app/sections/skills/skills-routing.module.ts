import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsRouteComponent} from './routes/skills-route/skills-route.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsRouteComponent,
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
export class SkillsRoutingModule { }
