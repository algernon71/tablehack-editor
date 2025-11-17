import { Component, Input } from '@angular/core';
import { LootCard } from '../../loot/loot-card/loot-card';
import { encounterEntity, Loot, lootEntity } from 'src/app/services/entities';
import { CardPrintData } from '../../print/print-cards/print-cards';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditableTable } from '../../common/editable-table/editable-table';
import { PrintCardThumbnail } from '../../print/print-card-thumbnail/print-card-thumbnail';
import { EditMonsterReference } from '../../monsters/edit-monster-reference/edit-monster-reference';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-edit-loot',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, EditableTable, PrintCardThumbnail, EditMonsterReference, FormsModule, MatIcon],
  templateUrl: './edit-loot.html',
  styleUrl: './edit-loot.scss'
})
export class EditLoot {
  @Input()
  loot!: Loot[];

  selectedLoot?: Loot;
  lootEntity = lootEntity;
  selectedLootTypeIndex = 0;


  addRow() {
    this.selectedLoot?.rows?.push({
      count: 1,
      type: 'ITEM',
      itemReference: ''
    });
  }

  removeRow(index: number) {
    this.selectedLoot?.rows?.splice(index, 1);
  }

  getEncounterCard(loot: Loot): CardPrintData {
    return {
      loot: loot
    }
  }
}
