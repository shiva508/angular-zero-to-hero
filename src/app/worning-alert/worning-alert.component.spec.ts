import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorningAlertComponent } from './worning-alert.component';

describe('WorningAlertComponent', () => {
  let component: WorningAlertComponent;
  let fixture: ComponentFixture<WorningAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorningAlertComponent]
    });
    fixture = TestBed.createComponent(WorningAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
