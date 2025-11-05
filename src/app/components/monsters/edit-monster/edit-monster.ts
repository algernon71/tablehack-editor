import { Component, Input, input, output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Monster, Action, MonstersService } from 'src/app/services/monsters';
import { MatSelectModule } from '@angular/material/select';
import { Icon, IconType, IconSize } from "../../common/icon/icon";
import { Resources } from 'src/app/services/resources';
import { ResourceReference } from "../../resources/resource-reference/resource-reference";
import { EditableField, EditableTable, RowData } from "../../common/editable-table/editable-table";
import { EditAction } from "../../common/edit-action/edit-action";
import { MonsterCard } from "../monster-card/monster-card";
import { ActionCard } from "../../common/action-card/action-card";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { EditCardAttributes } from "../../common/edit-card-attributes/edit-card-attributes";
import { RouterLink } from "@angular/router";
import { CardPrintData } from '../../print/print-cards/print-cards';
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";
import { PrintCard } from "../../print/print-card/print-card";
import { EditActions } from "../../common/edit-actions/edit-actions";

@Component({
  selector: 'app-edit-monster',
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    ResourceSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference,
    EditableTable,
    EditAction,
    MonsterCard,
    ActionCard,
    EditCardAttributes,
    RouterLink,
    PrintCardThumbnail,
    PrintCard,
    EditActions
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
      name: 'count',
      label: '#',
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

  card: CardPrintData = new CardPrintData();
  previewCard = true;

  saved = output<any>();
  closed = output<any>();
  constructor(private monstersService: MonstersService,
    public resourcesService: Resources) {

  }

  uploadImage(event: any) {
    console.info('uploadImage:', event);
    const file: File = event.target.files[0];
    const files = [file];
    console.info('file:', file);
    this.resourcesService.upload('image', files).subscribe(result => {
      this.monster!.image = file.name;
      console.info('upload:', result);
    });
  }


  ngOnInit() {
    this.card.monster = this.monster;
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
    const action = new Action();
    if (!this.monster?.data) {
      this.monster!.data! = {
        actions: []
      };
    }
    this.monster!.data!.actions!.push(action);
    console.info('addAction done', this.monster);
  }

  deleteAction(index: number) {
    console.info('deleteAction', event);
    this.monster!.data!.actions!.splice(index, 1);
  }

  addStep(action: Action) {
    action.steps.push({
      type: 'MOVE',
      name: '',
      attributes: '',
      damage: {},

    });
  }
  removeStep(action: Action, index: number) {
    action.steps.splice(index, 1);
  }

}
