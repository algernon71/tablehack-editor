import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceValue } from './defence-value';

describe('DefenceValue', () => {
  let component: DefenceValue;
  let fixture: ComponentFixture<DefenceValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenceValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefenceValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
