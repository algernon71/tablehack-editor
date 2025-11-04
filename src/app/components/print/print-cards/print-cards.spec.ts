import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCards } from './print-cards';

describe('PrintCards', () => {
  let component: PrintCards;
  let fixture: ComponentFixture<PrintCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
