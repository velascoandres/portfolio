import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillsRoutingModule} from './skills-routing.module';
import {SkillsRouteComponent} from './routes/skills-route/skills-route.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from '@ngneat/transloco';
import {SkillItemComponent} from './components/skill-item/skill-item.component';
import {SkillListComponent} from './components/skill-list/skill-list.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    SkillsRouteComponent,
    SkillItemComponent,
    SkillListComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    TranslocoModule,
    SharedModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'skills',
    }
  ]
})
export class SkillsModule {
}
