import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpgradeEntry } from './level-upgrade-entry';

describe('LevelUpgradeEntry', () => {
  let component: LevelUpgradeEntry;
  let fixture: ComponentFixture<LevelUpgradeEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpgradeEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelUpgradeEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
