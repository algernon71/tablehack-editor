import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootCard } from './loot-card';

describe('LootCard', () => {
  let component: LootCard;
  let fixture: ComponentFixture<LootCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LootCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LootCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
