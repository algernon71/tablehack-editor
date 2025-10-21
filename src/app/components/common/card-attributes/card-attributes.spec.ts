import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAttributes } from './card-attributes';

describe('CardAttributes', () => {
  let component: CardAttributes;
  let fixture: ComponentFixture<CardAttributes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAttributes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAttributes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
