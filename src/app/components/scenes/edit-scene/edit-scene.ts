import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { Encounter, encounterEntity, EncounterType, encounterTypeEntity, Scene } from 'src/app/services/entities';
import { ResourceReference } from '../../resources/resource-reference/resource-reference';
import { RouterLink } from '@angular/router';
import { PrintCardThumbnail } from '../../print/print-card-thumbnail/print-card-thumbnail';
import { ArrayDataSource, EntityDataSource } from 'src/app/services/entity';
import { EditAction } from "../../common/edit-action/edit-action";
import { Icon } from "../../common/icon/icon";
import { EditEntities } from "../../entity/edit-entities/edit-entities";
import { EditableTable } from "../../common/editable-table/editable-table";
import { EncounterToken } from "../../common/tokens/encounter-token/encounter-token";
import { AnyARecord } from 'dns';
import { EditMonsterReference } from "../../monsters/edit-monster-reference/edit-monster-reference";

@Component({
  selector: 'app-edit-scene',
  imports: [MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    PrintCardThumbnail, Icon, EditEntities, EditableTable, EncounterToken, EditMonsterReference],
  templateUrl: './edit-scene.html',
  styleUrl: './edit-scene.scss'
})
export class EditScene {
  @Input()
  scene!: Scene;


  selectedEncounter?: Encounter;
  encounterEntity = encounterEntity;
  selectedEncounterTypeIndex = 0;

  constructor() {

  }

  ngOnInit() {

  }

  selectEncounterTab(event: any) {
    console.info('selectEncounterTab', event);
    if (event.index >= this.scene.data?.encounterTypes!.length!) {
      this.addEncounterType();
    }
  }
  addEncounterRow() {
    this.selectedEncounter?.rows?.push({
      count: 1,
      monsterReference: ''
    });
  }

  addEncounterType() {
    this.scene.data?.encounterTypes?.push(
      {
        tokenId: '' + (this.scene.data?.encounterTypes.length + 1),
        encounters: []
      }
    );
    this.selectedEncounterTypeIndex = this.scene.data?.encounterTypes!.length! - 1;
  }
}
