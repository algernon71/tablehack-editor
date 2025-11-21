import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEquipmentCards } from './print-equipment-cards';

describe('PrintEquipmentCards', () => {
  let component: PrintEquipmentCards;
  let fixture: ComponentFixture<PrintEquipmentCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintEquipmentCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintEquipmentCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
