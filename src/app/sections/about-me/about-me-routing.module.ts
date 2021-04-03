import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeRouteComponent} from './routes/about-me-route/about-me-route.component';


const routes: Routes = [
  {
    component: AboutMeRouteComponent,
    path: '',
  },
  {
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule(
  {
    imports: [
      RouterModule.forChild(
       routes,
      ),
    ],
    exports: [
      RouterModule,
    ],
  }
)
export class AboutMeRoutingModule {
}
