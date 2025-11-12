import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonsterReference } from './edit-monster-reference';

describe('EditMonsterReference', () => {
  let component: EditMonsterReference;
  let fixture: ComponentFixture<EditMonsterReference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMonsterReference]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMonsterReference);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
