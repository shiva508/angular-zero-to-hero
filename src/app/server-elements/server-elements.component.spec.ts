import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementsComponent } from './server-elements.component';

describe('ServerElementsComponent', () => {
  let component: ServerElementsComponent;
  let fixture: ComponentFixture<ServerElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerElementsComponent]
    });
    fixture = TestBed.createComponent(ServerElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
