import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActions } from './edit-actions';

describe('EditActions', () => {
  let component: EditActions;
  let fixture: ComponentFixture<EditActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
