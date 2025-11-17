import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertnessToken } from './alertness-token';

describe('AlertnessToken', () => {
  let component: AlertnessToken;
  let fixture: ComponentFixture<AlertnessToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertnessToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertnessToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
