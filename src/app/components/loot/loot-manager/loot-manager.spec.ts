import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootManager } from './loot-manager';

describe('LootManager', () => {
  let component: LootManager;
  let fixture: ComponentFixture<LootManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LootManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LootManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
