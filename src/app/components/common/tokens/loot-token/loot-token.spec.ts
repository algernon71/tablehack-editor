import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootToken } from './loot-token';

describe('LootToken', () => {
  let component: LootToken;
  let fixture: ComponentFixture<LootToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LootToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LootToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
