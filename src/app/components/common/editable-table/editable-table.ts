import { Component, input, Input, model, output } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Icon } from "../icon/icon";
import { ResourceReference } from "../../resources/resource-reference/resource-reference";


export class EditableField {
  label?: string;
  icon?: string;
  description!: string;
  type!: string;
  name!: string;
  editable? = true;
  values?: any[]; 
}

export class RowData {
  index!: number;
  row!: any;
}

@Component({
  selector: 'app-editable-table',
  imports: [
    MatTableModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatIconModule, 
    FormsModule, 
    MatInputModule, 
    MatCheckboxModule, 
    Icon, 
    ResourceReference],
  templateUrl: './editable-table.html',
  styleUrl: './editable-table.scss'
})
export class EditableTable {
    
    fields = input<EditableField[]>([]);
    
    @Input()
    editable = true;

    data = model<any[]>([]);

    addRow = output<any>();
    editRow = output<RowData>();
    deleteRow = output<RowData>();
    updatedRow = output<any>();


    editing = false;
    
    editingRow?: any;

    dataSource = new MatTableDataSource(this.data());

    singleEdit = true;


    newRow() {
      if (this.addRow) {
        this.addRow.emit({});
      }
    }

    deleteEntry(index: number, row: any) {
      if (this.deleteRow) {
        this.deleteRow.emit({
          index: index,
          row: row
        });
      }
    }
    editEntry(index: number, row: any) {
      console.info('editEntry', index, row);
      if (this.editRow) {
        this.editRow.emit( {
          index: index,
          row: row
        });
      }
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    getDisplayedColumns(): string[] { 
      return this.fields().map(field => field.name);
    }

    setEditing(row: any, editing: boolean) {
      console.info('setEditing', row, editing);

      if (this.editingRow && (this.editingRow != row || !editing) ) {
      console.info('setEditing end', row, editing);
          this.updatedRow.emit(this.editingRow);
          this.editingRow = undefined;
      } 
      if (editing) {
          this.editingRow = row;
      } 

    }



  rowClick(index: number, row: any) {
    if (!this.editing) {
        this.editEntry(index, row);
        
      }
    }

  startEditing() { 
    console.info('Start editing');
      this.editing = true;
    }
    endEditing() { 
      this.editing = false;
    }
}
