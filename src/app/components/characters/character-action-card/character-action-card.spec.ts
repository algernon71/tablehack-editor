import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterActionCard } from './character-action-card';

describe('CharacterActionCard', () => {
  let component: CharacterActionCard;
  let fixture: ComponentFixture<CharacterActionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterActionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterActionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
