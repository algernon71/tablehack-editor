import { Component, input, Input, model, output } from '@angular/core';
import { EditableTableCell } from '../editable-table-cell/editable-table-cell';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TextCell } from "../text-cell/text-cell";
import { MatCheckboxModule } from '@angular/material/checkbox';


export class EditableField {
  label!: string;
  description!: string;
  type!: string;
  name!: string;
  editable? = true;
  values?: any[]; 
}

export class editEvent {
  entry!: any;
  field!: EditableField; 
}

@Component({
  selector: 'app-editable-table',
  imports: [MatTableModule, MatSelectModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule, MatCheckboxModule, TextCell],
  templateUrl: './editable-table.html',
  styleUrl: './editable-table.scss'
})
export class EditableTable {
    
    fields = input<EditableField[]>([]);
    data = model<any[]>([]);

    addRow = output<any>();
    editRow = output<any>();
    deleteRow = output<any>();
    updatedRow = output<any>();


    
    editingRow?: any;

    dataSource = new MatTableDataSource(this.data());

    singleEdit = true;
    currentlyEditing?: EditableTableCell;

    setEditingCell(editing: boolean, cell: EditableTableCell) {
        if (this.singleEdit && this.currentlyEditing) {
            this.currentlyEditing.setEditing(false, false);
        }    
        this.currentlyEditing = cell
    }

    newRow() {
      if (this.addRow) {
        this.addRow.emit({});
      }
      this.data.update(list => [...list, {}] );
    }

    deleteEntry(row: any, field: EditableField) {
      if (this.deleteRow) {
        this.deleteRow.emit(row);
      }
    }
    editEntry(row: any, field: EditableField) {
      if (this.editRow) {
        this.editRow.emit( row);
      }
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    getDisplayedColumns(): string[] { 
      return this.fields().map(field => field.name);
    }

    setEditing(row: any, field: EditableField, editing: boolean) {
      console.info('setEditing', row, field, editing);

      if (this.editingRow && (this.editingRow != row || !editing) ) {
          this.updatedRow.emit(this.editingRow);
          this.editingRow = undefined;
      } 
      if (editing && field.editable) {
          this.editingRow = row;
          field: field
      } 

    }
}
