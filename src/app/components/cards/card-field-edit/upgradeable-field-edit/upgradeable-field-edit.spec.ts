import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeableFieldEdit } from './upgradeable-field-edit';

describe('UpgradeableFieldEdit', () => {
  let component: UpgradeableFieldEdit;
  let fixture: ComponentFixture<UpgradeableFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeableFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeableFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
