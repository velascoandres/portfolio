import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SectionNotFoundComponent} from './routes/section-not-found/section-not-found.component';


const routes: Routes = [
  {
    path: 'about-me',
    loadChildren: () => import('./sections/about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path: 'education',
    loadChildren: () => import('./sections/education/education.module').then(m => m.EducationModule),
  },
  {
    path: 'experience',
    loadChildren: () => import('./sections/experience/experience.module').then(m => m.ExperienceModule),
  },
  {
    path: 'skills',
    loadChildren: () => import('./sections/skills/skills.module').then(m => m.SkillsModule),
  },
  {
    path: 'personal-projects',
    loadChildren: () => import('./sections/personal-projects/personal-projects-routing.module').then(m => m.PersonalProjectsRoutingModule),
  },
  {
    path: '',
    redirectTo: 'about-me',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: SectionNotFoundComponent,
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
