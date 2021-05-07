import {Component, OnInit} from '@angular/core';
import {ISkill} from '../../interfaces';
import {SKILLS} from '../../mocks/skills';

@Component({
  selector: 'app-skills-route',
  templateUrl: './skills-route.component.html',
  styleUrls: ['./skills-route.component.scss']
})
export class SkillsRouteComponent implements OnInit {

  skills: ISkill[];

  constructor() {
    this.skills = SKILLS;
  }

  ngOnInit(): void {
  }

}
