import {Component, Input, OnInit} from '@angular/core';
import {ISkill} from '../../interfaces';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  @Input()
  skills: ISkill[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
