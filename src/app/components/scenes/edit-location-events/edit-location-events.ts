import { Component, Input } from '@angular/core';
import { LootCard } from '../../loot/loot-card/loot-card';
import { encounterEntity, LocationEvent, locationEventEntity, Loot, lootEntity } from 'src/app/services/entities';
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
  selector: 'app-edit-location-events',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, EditableTable, PrintCardThumbnail, EditMonsterReference, FormsModule, MatIcon],
  templateUrl: './edit-location-events.html',
  styleUrl: './edit-location-events.scss'
})
export class EditLocationEvents {
  @Input()
  locationEvents!: LocationEvent[];
  loot!: Loot[];

  selected?: LocationEvent;
  locationEventEntity = locationEventEntity;
  selectedLootTypeIndex = 0;



  getLocationEventCard(event: LocationEvent): CardPrintData {
    return {
      locationEvent: event
    }
  }
}
