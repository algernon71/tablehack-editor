import { Component } from '@angular/core';
import { MatTableDataSource, MatHeaderCell, MatTableModule } from '@angular/material/table';
import { MatCell } from "../../../../../node_modules/@angular/material/table/index";
import { App } from 'src/app/app';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TextCell } from "../../common/text-cell/text-cell";
import { EditableField, EditableTable } from '../../common/editable-table/editable-table';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { EditMonster } from "../edit-monster/edit-monster";
import { MonsterCard } from "../monster-card/monster-card";

@Component({
  selector: 'app-monsters',
  imports: [MatTableModule, MatSelectModule, MatFormFieldModule, MatIconModule, FormsModule, MatInputModule, TextCell, EditableTable, EditMonster, MonsterCard],
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
        name: 'health',
        label: 'Health',
        description: '',
        type: 'number',
        editable: true
      },
      {
        name: 'level',
        label: 'Level',
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

  editMonster(monster: any) {
    console.info('editMonster', monster);
    this.monster = monster;
  }

  editClosed() {
    console.info('editClosed');
    this.monster = undefined;
  }

  saveMonster(monster: Monster) {
    console.info('saveMonster', monster);
    this.monstersService.updateMonster(monster).subscribe(response => {});
  }
  deleteMonster(monster: Monster) {
    console.info('saveMonster', monster);
    this.monstersService.deleteMonster(monster).subscribe(response => {
      this.refreshList();
    });
  }
}
