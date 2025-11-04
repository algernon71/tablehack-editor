import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDamageValue } from './edit-damage-value';

describe('EditDamageValue', () => {
  let component: EditDamageValue;
  let fixture: ComponentFixture<EditDamageValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDamageValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDamageValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
