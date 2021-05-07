import {Component, Input, OnInit} from '@angular/core';
import {ISkill} from '../../interfaces';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input()
  skill: ISkill;

  levelList: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.levelList = Array(this.skill.level).fill(1);
  }

}
