import { Component } from '@angular/core';
import { EncounterService, GameEncounter } from 'src/app/services/encounter-service';
import { EditableField, EditableTable, RowData } from '../../common/editable-table/editable-table';
import { EncounterCard } from "../encounter-card/encounter-card";


@Component({
  selector: 'app-encounter-manager',
  imports: [EditableTable, EncounterCard],
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
  
    ];

  encounters?: GameEncounter [] = [
    {
      tokenId: '1',
      title: 'Nothing'
    },
    {
      tokenId: '2',
      title: 'Goblin patroll'
    },
    {
      tokenId: '3',
      title: 'Stray goblin'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },
    {
      tokenId: '1',
      title: 'Goblin party!'
    },  ];

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
