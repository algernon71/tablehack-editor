import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterManager } from './encounter-manager';

describe('EncounterManager', () => {
  let component: EncounterManager;
  let fixture: ComponentFixture<EncounterManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
