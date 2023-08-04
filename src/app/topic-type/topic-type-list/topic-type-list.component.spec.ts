import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTypeListComponent } from './topic-type-list.component';

describe('TopicTypeListComponent', () => {
  let component: TopicTypeListComponent;
  let fixture: ComponentFixture<TopicTypeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicTypeListComponent]
    });
    fixture = TestBed.createComponent(TopicTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
