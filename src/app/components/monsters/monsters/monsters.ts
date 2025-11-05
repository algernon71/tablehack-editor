import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataPage, DataSource, EditableField, EditableTable, ImportRowData, RowData } from '../../common/editable-table/editable-table';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { EditMonster } from "../edit-monster/edit-monster";
import { MonsterCard } from "../monster-card/monster-card";
import { MatTabsModule } from '@angular/material/tabs';
import { DragAndDrop } from 'src/app/directives/drag-and-drop';
import { Resources } from 'src/app/services/resources';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-monsters',
  imports: [
    DragAndDrop,
    MatTableModule,
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
export class Monsters implements DataSource {
  fields: EditableField[] = [
    {
      name: 'reference',
      label: '',
      description: '',
      type: 'reference',
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
      name: 'level',
      icon: 'LEVEL',
      label: 'Level',
      description: '',
      type: 'number',
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
      name: 'data.defence.physical',
      icon: 'DEFENCE_PHYSICAL',
      label: 'Defence ',
      description: '',
      type: 'number',
      editable: true
    },
    {
      name: 'data.defence.poison',
      icon: 'DEFENCE_POISON',
      label: 'Defence ',
      description: '',
      type: 'number',
      editable: true
    },
    {
      name: 'data.defence.fire',
      icon: 'DEFENCE_FIRE',
      label: 'Defence ',
      description: '',
      type: 'number',
      editable: true
    },
    {
      name: 'data.defence.cold',
      icon: 'DEFENCE_COLD',
      label: 'Defence ',
      description: '',
      type: 'number',
      editable: true
    },
  ];
  monsters?: Monster[];

  monster?: Monster;

  constructor(private monstersService: MonstersService, private resourcesService: Resources) {

  }
  ngOnInit() {
  }


  addRow(): Observable<any> {
    const newMonster = new Monster();

    return this.monstersService.addMonster(newMonster);

  }

  deleteRow(monster: Monster): Observable<void> {
    return this.monstersService.deleteMonster(monster);
  }

  fetchRow(monster: Monster): Observable<any> {
    return this.monstersService.getMonster(monster.id!);
  }

  fetchRows(page: number, pageSize: number): Observable<DataPage> {
    return this.monstersService.getMonsters().pipe(map(response => {
      const page: DataPage = {
        content: response
      };
      return page;
    }));

  }

  importRow(importData: ImportRowData): Observable<ImportRowData> {
    const newMonster = new Monster();
    newMonster.image = importData.image;
    newMonster.name = importData.name!;
    return this.monstersService.addMonster(newMonster).pipe(map(monster => {
      const importedRow: ImportRowData = {
        id: monster.id,
        name: monster.name,
        image: monster.image

      };
      return importedRow;
    }));


  }
  saveRow(monster: Monster): Observable<any> {
    return this.monstersService.updateMonster(monster);
  }

}
