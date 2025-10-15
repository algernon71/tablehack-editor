import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditableTableCell } from '../editable-table-cell/editable-table-cell';

@Component({
  selector: 'app-text-cell',
  imports: [FormsModule],
  templateUrl: './text-cell.html',
  styleUrl: './text-cell.scss'
})
export class TextCell extends EditableTableCell {
  value = model<string>('');

}
