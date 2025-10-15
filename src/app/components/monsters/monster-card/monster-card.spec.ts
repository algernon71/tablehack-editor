import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCard } from './monster-card';

describe('MonsterCard', () => {
  let component: MonsterCard;
  let fixture: ComponentFixture<MonsterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
