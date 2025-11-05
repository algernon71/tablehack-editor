import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceValues } from './defence-values';

describe('DefenceValues', () => {
  let component: DefenceValues;
  let fixture: ComponentFixture<DefenceValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenceValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefenceValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
