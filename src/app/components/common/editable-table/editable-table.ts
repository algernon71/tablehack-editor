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
import { Resources } from 'src/app/services/resources';
import { DragAndDrop } from "src/app/directives/drag-and-drop";
import { map, Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation-dialog';
import { MatDialog } from '@angular/material/dialog';


export class EditableField {
  label?: string;
  icon?: string;
  description!: string;
  type!: string;
  name!: string;
  editable? = true;
  values?: any[];
  width?: string;


}

export class RowData {
  index!: number;
  row!: any;
}

export class ImportRowData {
  id?: number;
  name?: string;
  image?: string;
}

export interface DataSource {
  importRow(importData: ImportRowData): Observable<ImportRowData>;
  saveRow(row: any): Observable<any>;
  fetchRow(row: any): Observable<any>;
  deleteRow(row: any): Observable<void>;
  addRow(): Observable<any>;

  fetchRows(page: number, pageSize: number): Observable<DataPage>;
}

export class DataPage {
  content?: any[];
  page?: number;
  size?: number;
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
    MatButtonModule,
    MatCheckboxModule,
    Icon,
    ResourceReference,
    DragAndDrop
  ],
  templateUrl: './editable-table.html',
  styleUrl: './editable-table.scss'
})
export class EditableTable {

  fields = input<EditableField[]>([]);

  @Input()
  editable = true;



  data = model<any[]>([]);

  @Input()
  dataSource?: DataSource;

  selectedRow = model<any>();

  addingRow = false;
  editMode = false;

  editingRow?: any;


  singleEdit = true;

  constructor(private resourcesService: Resources, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.loadList()?.subscribe(() => { });
  }

  loadList() {
    return this.dataSource?.fetchRows(0, 20).pipe(map(page => {
      console.info('fetchRows, response:', page);
      this.data.set(page.content!);
    }));
  }
  columnWidth(field: EditableField) {
    if (field.width) {
      return field.width;
    }
    switch (field.type) {
      case 'number':
        return '30px';
      case 'string':
      case 'text':
      default:
        return '100px';
    }
  }

  editing(row: any): boolean {
    if (this.editMode) {
      return true;
    }

    if (row == this.selectedRow()) {
      return true;
    }

    return false;
  }

  columnValue(field: EditableField, row: any) {
    const parts = field.name.split('.');
    let i = 0;
    let value = row[parts[i]];
    while (i + 1 < parts.length) {
      i++;
      value = value[parts[i]];
      // console.info('columnValue(' + field.name + ') part[' + i + ']: ', parts[i], value);
    }
    // console.info('columnValue(' + field.name + ') = ' + value);
    return value;
  }

  columnValueChanged(field: EditableField, row: any, value: any) {
    const parts = field.name.split('.');
    let i = 0;
    let valueRef = row;
    //    console.info('columnValue(' + field.name + ') valueref: ', valueRef);
    while (i + 1 < parts.length) {
      valueRef = valueRef[parts[i]];
      // console.info('columnValue(' + field.name + ') part[' + i + ']: ', parts[i], valueRef);
      i++;

    }
    // console.info('columnValueChanged ' + field.name + ' SET ', valueRef);
    valueRef[parts[i]] = value;
    row.updated = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  getDisplayedColumns(): string[] {
    return this.fields().map(field => field.name);
  }

  setEditing(row: any, editing: boolean) {
    console.info('setEditing', row, editing);

    if (this.editingRow && (this.editingRow != row || !editing)) {
      console.info('setEditing end', row, editing);
      this.saveRow(row);
      this.editingRow = undefined;
    }
    if (editing) {
      this.editingRow = row;
    }

  }


  new() {
    this.dataSource?.addRow().subscribe((row) => {
      this.loadList()?.subscribe(() => {
        this.selectRow(0, row);
        this.addingRow = true;

      });
    });
  }

  save() {
    this.saveRow(this.selectedRow()).subscribe(() => {
      this.addingRow = false;
      this.refreshList();
      this.selectedRow.set(undefined);
    });
  }
  saveRow(row: any): Observable<any> {
    return this.dataSource?.saveRow(row)!;
  }
  cancel() {
    if (this.addingRow) {
      this.doDelete();
      this.addingRow = false;
    }
    this.selectedRow.set(undefined);
  }

  delete() {
    ConfirmationDialog.confirm(this.dialog, 'Delete?', 'Are you sure?', (confirmed) => {
      if (confirmed) {
        this.doDelete();
      }
    });

  }
  doDelete() {
    this.dataSource?.deleteRow(this.selectedRow()).subscribe(() => {
      this.addingRow = false;
      this.selectedRow.set(undefined);
      this.refreshList();
    });

  }

  selectRow(index: number, row: any) {
    if (!this.editMode) {
      this.selectedRow.set(row);
    }
  }

  startEditing() {
    console.info('Start editing');
    this.editMode = true;
  }
  abortEditing() {
    this.editMode = false;
    const editedRows: any[] = [];
    this.data().forEach(row => {
      if (row.updated) {
        editedRows.push(row);
        row.updated = false;
      }
    });

    editedRows.forEach(row => {
      this.dataSource?.fetchRow(row).subscribe(fetchedRow => {

      });

    });
  }
  endEditing() {
    this.editMode = false;
    const editedRows: any[] = [];
    this.data().forEach(row => {
      if (row.updated) {
        this.saveRow(row);
        row.updated = false;
      }
    });

    console.info('editedRows:', editedRows);
    editedRows.forEach(row => {
      this.dataSource?.saveRow(row);

    });
  }

  dropFiles(files: File[]) {
    console.info('dropFiles', event);
    const importedRows: ImportRowData[] = [];
    files.forEach(file => {
      const files = [file];
      this.resourcesService.upload('image', files).subscribe(result => {
        const importData: ImportRowData = {
          image: file.name,
          name: this.getNameFromFile(file)
        };
        this.dataSource?.importRow(importData).subscribe(row => {
          importedRows.push(row);

        });
      });

    });

  }

  getNameFromFile(file: File) {
    const filename = file.name;
    const strippedName = filename.substring(0, filename.length - 4)
      .replaceAll('_', ' ')
      .replaceAll('-', ' ');
    return strippedName.charAt(0).toUpperCase() + strippedName.slice(1);
  }


}
