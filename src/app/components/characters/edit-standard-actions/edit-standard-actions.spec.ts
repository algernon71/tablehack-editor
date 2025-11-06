import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStandardActions } from './edit-standard-actions';

describe('EditStandardActions', () => {
  let component: EditStandardActions;
  let fixture: ComponentFixture<EditStandardActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStandardActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStandardActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
