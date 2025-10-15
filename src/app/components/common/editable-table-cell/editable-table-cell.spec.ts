import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTableCell } from './editable-table-cell';

describe('EditableTableCell', () => {
  let component: EditableTableCell;
  let fixture: ComponentFixture<EditableTableCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditableTableCell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableTableCell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
