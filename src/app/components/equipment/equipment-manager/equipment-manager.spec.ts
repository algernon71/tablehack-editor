import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentManager } from './equipment-manager';

describe('EquipmentManager', () => {
  let component: EquipmentManager;
  let fixture: ComponentFixture<EquipmentManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
