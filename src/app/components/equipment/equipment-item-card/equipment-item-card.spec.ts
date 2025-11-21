import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemCard } from './equipment-item-card';

describe('EquipmentItemCard', () => {
  let component: EquipmentItemCard;
  let fixture: ComponentFixture<EquipmentItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentItemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentItemCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
