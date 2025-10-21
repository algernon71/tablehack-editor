import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterToken } from './encounter-token';

describe('EncounterToken', () => {
  let component: EncounterToken;
  let fixture: ComponentFixture<EncounterToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
