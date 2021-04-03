import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectsRouteComponent } from './personal-projects-route.component';

describe('PersonalProjectsRouteComponent', () => {
  let component: PersonalProjectsRouteComponent;
  let fixture: ComponentFixture<PersonalProjectsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProjectsRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProjectsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
