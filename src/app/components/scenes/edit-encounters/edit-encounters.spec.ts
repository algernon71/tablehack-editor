import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncounters } from './edit-encounters';

describe('EditEncounters', () => {
  let component: EditEncounters;
  let fixture: ComponentFixture<EditEncounters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEncounters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEncounters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
