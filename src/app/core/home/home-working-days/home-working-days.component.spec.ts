import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkingDaysComponent } from './home-working-days.component';

describe('HomeWorkingDaysComponent', () => {
  let component: HomeWorkingDaysComponent;
  let fixture: ComponentFixture<HomeWorkingDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkingDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkingDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
