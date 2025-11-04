import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMonsterCards } from './print-monster-cards';

describe('PrintMonsterCards', () => {
  let component: PrintMonsterCards;
  let fixture: ComponentFixture<PrintMonsterCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintMonsterCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintMonsterCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
