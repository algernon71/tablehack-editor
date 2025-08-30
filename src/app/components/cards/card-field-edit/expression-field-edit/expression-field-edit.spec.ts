import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionFieldEdit } from './expression-field-edit';

describe('ExpressionFieldEdit', () => {
  let component: ExpressionFieldEdit;
  let fixture: ComponentFixture<ExpressionFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressionFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressionFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
