import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Encounter, encounterEntity } from 'src/app/services/entities';
import { EditableTable } from "../../common/editable-table/editable-table";
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";
import { EditMonsterReference } from "../../monsters/edit-monster-reference/edit-monster-reference";
import { CardPrintData } from '../../print/print-cards/print-cards';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-encounters',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, EditableTable, PrintCardThumbnail, EditMonsterReference, FormsModule, MatIcon],
  templateUrl: './edit-encounters.html',
  styleUrl: './edit-encounters.scss'
})
export class EditEncounters {
  @Input()
  encounters!: Encounter[];

  selectedEncounter?: Encounter;
  encounterEntity = encounterEntity;
  selectedEncounterTypeIndex = 0;


  addEncounterRow() {
    this.selectedEncounter?.rows?.push({
      count: 1,
      monsterReference: ''
    });
  }

  removeEncounterRow(index: number) {
    this.selectedEncounter?.rows?.splice(index, 1);
  }

  getEncounterCard(encounter: Encounter): CardPrintData {
    return {
      encounter: encounter
    }
  }
}
