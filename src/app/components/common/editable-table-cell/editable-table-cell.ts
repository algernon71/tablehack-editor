import { Component, Input } from '@angular/core';
import { EditableTable } from '../editable-table/editable-table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-editable-table-cell',
  imports: [],
  templateUrl: './editable-table-cell.html',
  styleUrl: './editable-table-cell.scss'
})
export class EditableTableCell {
    @Input()
    table?: EditableTable;

    editable = true;
    editing = false;

    setEditing(edit: boolean, updateTable: boolean) {
        this.editing = edit;
        if ( updateTable &&  this.table) {
          this.table.setEditingCell(this.editing, this);
        }
    }

}
