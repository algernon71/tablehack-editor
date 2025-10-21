import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterCard } from './encounter-card';

describe('EncounterCard', () => {
  let component: EncounterCard;
  let fixture: ComponentFixture<EncounterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
