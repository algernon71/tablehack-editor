import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSymbol } from './range-symbol';

describe('RangeSymbol', () => {
  let component: RangeSymbol;
  let fixture: ComponentFixture<RangeSymbol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangeSymbol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeSymbol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
