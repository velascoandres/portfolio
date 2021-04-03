import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRouteComponent } from './skills-route.component';

describe('SkillsRouteComponent', () => {
  let component: SkillsRouteComponent;
  let fixture: ComponentFixture<SkillsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
