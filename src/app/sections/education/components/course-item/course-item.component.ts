import {Component, Input, OnInit} from '@angular/core';
import {CoursePlatform, ICourse} from '../../interfaces/course.interface';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input()
  course: ICourse;

  constructor() {
  }

  ngOnInit(): void {
  }

  private makeUrl(): string {
    const platformsPaths: Record<CoursePlatform, string> = {
      coursera: 'https://www.coursera.org/account/accomplishments/certificate',
      udemy: 'https://www.udemy.com/certificate',
    };
    const selectedPlatform = platformsPaths[this.course.platform];
    return `${selectedPlatform}/${this.course.credentialId}/`;
  }

  public openCredentialWindow(): void {
    const url = this.makeUrl();
    window.open(url);
  }

}
