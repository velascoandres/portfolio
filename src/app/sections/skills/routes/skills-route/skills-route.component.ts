import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {ISkill} from '../../interfaces';
import {SKILLS} from '../../mocks/skills';

@Component({
  selector: 'app-skills-route',
  templateUrl: './skills-route.component.html',
  styleUrls: ['./skills-route.component.scss']
})
export class SkillsRouteComponent implements OnInit {

  skills: ISkill[];

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Skills');
    this.skills = SKILLS;
  }


  ngOnInit(): void {
  }

}
