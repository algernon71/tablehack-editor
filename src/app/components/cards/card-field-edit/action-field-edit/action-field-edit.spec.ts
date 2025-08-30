import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFieldEdit } from './action-field-edit';

describe('ActionFieldEdit', () => {
  let component: ActionFieldEdit;
  let fixture: ComponentFixture<ActionFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
