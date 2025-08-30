import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelect } from './card-select';

describe('CardSelect', () => {
  let component: CardSelect;
  let fixture: ComponentFixture<CardSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
