import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMonsterAction } from './edit-monster-action';

describe('EditMonsterAction', () => {
  let component: EditMonsterAction;
  let fixture: ComponentFixture<EditMonsterAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMonsterAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMonsterAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
