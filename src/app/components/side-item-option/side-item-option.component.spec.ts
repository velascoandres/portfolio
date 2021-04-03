import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemOptionComponent } from './side-item-option.component';

describe('SideItemOptionComponent', () => {
  let component: SideItemOptionComponent;
  let fixture: ComponentFixture<SideItemOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideItemOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
