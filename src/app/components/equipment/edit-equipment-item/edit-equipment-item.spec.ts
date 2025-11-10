import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipmentItem } from './edit-equipment-item';

describe('EditEquipmentItem', () => {
  let component: EditEquipmentItem;
  let fixture: ComponentFixture<EditEquipmentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEquipmentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEquipmentItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
