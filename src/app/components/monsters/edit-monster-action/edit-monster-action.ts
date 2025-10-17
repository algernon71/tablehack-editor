import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MonsterAction } from 'src/app/services/monsters';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Icon } from '../../common/icon/icon';
import { ResourceReference } from '../../resources/resource-reference/resource-reference';
import { EditableField } from '../../common/editable-table/editable-table';

@Component({
  selector: 'app-edit-monster-action',
  imports: [MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    ResourceSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference],
  templateUrl: './edit-monster-action.html',
  styleUrl: './edit-monster-action.scss'
})
export class EditMonsterAction {

  @Input()
  action?: MonsterAction;
  saved = output<any>();
  closed = output<any>();

  save() {
    this.saved.emit({});
  }

  cancel() {
    this.closed.emit({});

  }

}
