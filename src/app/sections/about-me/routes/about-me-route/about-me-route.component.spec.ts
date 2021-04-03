import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeRouteComponent } from './about-me-route.component';

describe('AboutMeRouteComponent', () => {
  let component: AboutMeRouteComponent;
  let fixture: ComponentFixture<AboutMeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
