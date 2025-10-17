import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditableField, EditableTable, RowData } from '../../common/editable-table/editable-table';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { EditMonster } from "../edit-monster/edit-monster";
import { MonsterCard } from "../monster-card/monster-card";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-monsters',
  imports: [MatTableModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatTabsModule,
    FormsModule, 
    MatInputModule, 
    EditableTable, 
    EditMonster, 
    MonsterCard],
  templateUrl: './monsters.html',
  styleUrl: './monsters.scss'
})
export class Monsters {
fields: EditableField[] = [
      {
        name: 'id',
        label: 'Id',
        description: '',
        type: 'string',
        editable: false
      },
      {
        name: 'reference',
        label: 'Refernce',
        description: '',
        type: 'string',
        editable: true
      },
      {
        name: 'name',
        label: 'Name',
        description: '',
        type: 'string',
        editable: true
      },
      {
        name: 'type',
        label: 'Type',
        description: '',
        type: 'enum',
        editable: true,
        values: ["Humanoid", "Magic", "Undead"]
      },
      {
        name: 'image',
        label: 'Image',
        description: '',
        type: 'image',
        editable: true
      },
      {
        name: 'health',
        icon: 'HEALTH',
        label: 'Health',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'level',
        icon: 'LEVEL',
        label: 'Level',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'physicalDefence',
        icon: 'DEFENCE_PHYSICAL',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'poisonDefence',
        icon: 'DEFENCE_POISON',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'fireDefence',
        icon: 'DEFENCE_FIRE',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'coldDefence',
        icon: 'DEFENCE_COLD',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'electricityDefence',
        icon: 'DEFENCE_ELECTRICITY',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'magicDefence',
        icon: 'DEFENCE_MAGIC',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'actions',
        label: '',
        description: '',
        type: 'actions',
        editable: true
      },
    ];
  monsters?: Monster[];

  monster?: Monster;

  constructor(private monstersService: MonstersService) {

  }
  ngOnInit(		) {
    this.refreshList();
  }

  refreshList() { 
    this.monstersService.getMonsters().subscribe(response => {
      this.monsters = response;
    });

  }

  addMonster() { 
    const newMonster = new Monster();

    this.monstersService.addMonster(newMonster).subscribe(response => {
    this.refreshList();

    });
  }

  editMonster(event: RowData) {
    console.info('editMonster', event);
    this.monster = event.row;
  }

  editClosed() {
    console.info('editClosed');
    this.monster = undefined;
  }

  saveMonster(monster: Monster) {
    this.monstersService.updateMonster(monster).subscribe(response => {});
  }
  deleteMonster(event: RowData) {
    console.info('saveMonster', event);
    this.monstersService.deleteMonster(event.row).subscribe(response => {
      this.refreshList();
    });
  }
}
