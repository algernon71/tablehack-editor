import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCharacterCards } from './print-character-cards';

describe('PrintCharacterCards', () => {
  let component: PrintCharacterCards;
  let fixture: ComponentFixture<PrintCharacterCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCharacterCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCharacterCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
