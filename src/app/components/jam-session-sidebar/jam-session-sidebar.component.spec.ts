import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamSessionSidebarComponent } from './jam-session-sidebar.component';

describe('JamSessionSidebarComponent', () => {
  let component: JamSessionSidebarComponent;
  let fixture: ComponentFixture<JamSessionSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamSessionSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamSessionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
