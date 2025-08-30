import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackFieldEdit } from './attack-field-edit';

describe('AttackFieldEdit', () => {
  let component: AttackFieldEdit;
  let fixture: ComponentFixture<AttackFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
