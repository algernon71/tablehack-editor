import { Component } from '@angular/core';
import { EncounterService, GameEncounter } from 'src/app/services/encounter-service';
import { EditableField, EditableTable, RowData } from '../../common/editable-table/editable-table';
import { EncounterCard } from "../encounter-card/encounter-card";
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-encounter-manager',
  imports: [EditableTable, EncounterCard, MatTabsModule],
  templateUrl: './encounter-manager.html',
  styleUrl: './encounter-manager.scss'
})
export class EncounterManager {

  encounterFields: EditableField[] = [
      {
        name: 'tokenId',
        label: 'Token',
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
      {
        name: 'description',
        label: 'Description',
        description: '',
        type: 'string',
        editable: true
      },
  
    ];

  encounters?: GameEncounter [];

  constructor(private encountersService: EncounterService) {

  }
  ngOnInit(		) {
    this.refreshList();
  }

  refreshList() { 
    this.encountersService.getEncounters().subscribe(response => {
      this.encounters = response;
      console.info('Loaded encounters:', response);
    });

  }

  encounter?: GameEncounter;

  edit(row: RowData) {
    this.encounter = row.row
    console.info('edit', this.encounter);
  }

  delete(encounter: any) {

  }
  add() { 

  }
}
