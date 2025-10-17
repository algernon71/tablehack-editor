import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterActionCard } from './monster-action-card';

describe('MonsterActionCard', () => {
  let component: MonsterActionCard;
  let fixture: ComponentFixture<MonsterActionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterActionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterActionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
