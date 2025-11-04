import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterAction } from './edit-character-action';

describe('EditCharacterAction', () => {
  let component: EditCharacterAction;
  let fixture: ComponentFixture<EditCharacterAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCharacterAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCharacterAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
