import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventToken } from './event-token';

describe('EventToken', () => {
  let component: EventToken;
  let fixture: ComponentFixture<EventToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
