import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDamage } from './edit-damage';

describe('EditDamage', () => {
  let component: EditDamage;
  let fixture: ComponentFixture<EditDamage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDamage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDamage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
