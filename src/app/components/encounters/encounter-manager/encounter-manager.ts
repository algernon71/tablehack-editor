import { Component } from '@angular/core';
import { EncounterService, GameEncounter } from 'src/app/services/encounter-service';
import { EditableTable } from '../../common/editable-table/editable-table';
import { EncounterCard } from "../encounter-card/encounter-card";
import { MatTabsModule } from '@angular/material/tabs';
import { EntityColumn } from 'src/app/services/entity';


@Component({
  selector: 'app-encounter-manager',
  imports: [EditableTable, EncounterCard, MatTabsModule],
  templateUrl: './encounter-manager.html',
  styleUrl: './encounter-manager.scss'
})
export class EncounterManager {

  columns: EntityColumn[] = [
    EntityColumn.number('tokenId', 'Token'),
    EntityColumn.string('title', 'Title'),
    EntityColumn.string('description', 'Description'),
  ];


  encounters?: GameEncounter[];

  constructor(private encountersService: EncounterService) {

  }
  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.encountersService.getEncounters().subscribe(response => {
      this.encounters = response;
      console.info('Loaded encounters:', response);
    });

  }

  encounter?: GameEncounter;

}
