import { Component, Input, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Monster, MonsterAction, MonstersService } from 'src/app/services/monsters';
import { MatSelectModule } from '@angular/material/select';
import { Icon, IconType, IconSize } from "../../common/icon/icon";
import { Resources } from 'src/app/services/resources';
import { ResourceReference } from "../../resources/resource-reference/resource-reference";
import { EditableField, EditableTable, RowData } from "../../common/editable-table/editable-table";
import { EditMonsterAction } from "../edit-monster-action/edit-monster-action";
import { MonsterCard } from "../monster-card/monster-card";

@Component({
  selector: 'app-edit-monster',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    ResourceSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference,
    EditableTable,
    EditMonsterAction,
    MonsterCard
],
  templateUrl: './edit-monster.html',
  styleUrl: './edit-monster.scss'
})
export class EditMonster {
  actionFields: EditableField[] = [
    {
      name: 'initiative',
      label: 'Initiative',
      description: '',
      type: 'number',
      editable: true
    },
    {
      name: 'title',
      label: 'Title',
      description: '',
      type: 'string',
      editable: true
    },

  ];

  @Input()
  monster?: Monster;

  action?: MonsterAction;

  saved = output<any>();
  closed = output<any>();
  constructor(private monstersService: MonstersService, 
    public resourcesService: Resources) {
  
  }
  
  uploadImage(event: any) {
      console.info('uploadImage:', event);
      const file:File = event.target.files[0];
      const files = [file];
      console.info('file:', file);
      this.resourcesService.upload('image', files).subscribe(result => {
        this.monster!.image = file.name;
        console.info('upload:', result);
      });
    }

    
  ngOnInit(		) {
    console.info('Editing monster:', this.monster);
  }

  save() { 
    console.info("save", this.saved);
    this.monstersService.updateMonster(this.monster!).subscribe(response => {
      if (this.saved) {
        this.saved.emit({});

      }

    });
  }

  cancel() { 
    this.closed.emit("");

  }

  addAction() {
    console.info('addAction', this.monster);
    const action = new MonsterAction();
    this.monster?.actions?.push(action);
    console.info('addAction done', this.monster);
  }

  deleteAction(event: RowData) {
    console.info('deleteAction', event);
    this.monster?.actions?.splice(event.index, 1);
  }

  editAction(event: RowData) {
    console.info('editAction', event);
    this.action = event.row;
  }

  closeAction() {
    this.action = undefined;
  }
}
