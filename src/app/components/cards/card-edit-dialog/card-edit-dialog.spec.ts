import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditDialog } from './card-edit-dialog';

describe('CardEditDialog', () => {
  let component: CardEditDialog;
  let fixture: ComponentFixture<CardEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEditDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEditDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
