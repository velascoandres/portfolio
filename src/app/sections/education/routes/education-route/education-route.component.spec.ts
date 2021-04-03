import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationRouteComponent } from './education-route.component';

describe('EducationRouteComponent', () => {
  let component: EducationRouteComponent;
  let fixture: ComponentFixture<EducationRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
