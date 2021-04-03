import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNotFoundComponent } from './section-not-found.component';

describe('SectionNotFoundComponent', () => {
  let component: SectionNotFoundComponent;
  let fixture: ComponentFixture<SectionNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
