import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStat } from './character-stat';

describe('CharacterStat', () => {
  let component: CharacterStat;
  let fixture: ComponentFixture<CharacterStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
