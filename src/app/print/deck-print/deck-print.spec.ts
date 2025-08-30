import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckPrint } from './deck-print';

describe('DeckPrint', () => {
  let component: DeckPrint;
  let fixture: ComponentFixture<DeckPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
