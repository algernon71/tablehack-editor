import { Component } from '@angular/core';
import { EncounterService, GameEncounter } from 'src/app/services/encounter-service';
import { EditableField, EditableTable, RowData } from '../../common/editable-table/editable-table';


@Component({
  selector: 'app-encounter-manager',
  imports: [EditableTable],
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
      tokenId: '1',
      title: 'Goblin patroll'
    },
    {
      tokenId: '1',
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

  edit(row: RowData) {

  }

  delete(row: RowData) {

  }
  add() { 

  }
}
