import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntities } from './edit-entities';

describe('EditEntities', () => {
  let component: EditEntities;
  let fixture: ComponentFixture<EditEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEntities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
