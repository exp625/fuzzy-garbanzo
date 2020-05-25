import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamSessionQueueComponent } from './jam-session-queue.component';

describe('JamSessionQueueComponent', () => {
  let component: JamSessionQueueComponent;
  let fixture: ComponentFixture<JamSessionQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamSessionQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamSessionQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
