import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterStat } from './edit-character-stat';

describe('EditCharacterStat', () => {
  let component: EditCharacterStat;
  let fixture: ComponentFixture<EditCharacterStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCharacterStat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCharacterStat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
