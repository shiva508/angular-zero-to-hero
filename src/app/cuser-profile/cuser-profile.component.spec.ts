import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuserProfileComponent } from './cuser-profile.component';

describe('CuserProfileComponent', () => {
  let component: CuserProfileComponent;
  let fixture: ComponentFixture<CuserProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuserProfileComponent]
    });
    fixture = TestBed.createComponent(CuserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
