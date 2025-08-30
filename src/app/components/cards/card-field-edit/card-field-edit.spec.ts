import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFieldEdit } from './card-field-edit';

describe('CardFieldEdit', () => {
  let component: CardFieldEdit;
  let fixture: ComponentFixture<CardFieldEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFieldEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFieldEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
