import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntity } from './edit-entity';

describe('EditEntity', () => {
  let component: EditEntity;
  let fixture: ComponentFixture<EditEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEntity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
