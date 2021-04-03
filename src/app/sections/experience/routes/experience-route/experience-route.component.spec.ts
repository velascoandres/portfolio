import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceRouteComponent } from './experience-route.component';

describe('ExperienceRouteComponent', () => {
  let component: ExperienceRouteComponent;
  let fixture: ComponentFixture<ExperienceRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
