import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeToken } from './time-token';

describe('TimeToken', () => {
  let component: TimeToken;
  let fixture: ComponentFixture<TimeToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
