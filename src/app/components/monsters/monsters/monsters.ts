import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditableTable } from '../../common/editable-table/editable-table';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { EditMonster } from "../edit-monster/edit-monster";
import { MonsterCard } from "../monster-card/monster-card";
import { MatTabsModule } from '@angular/material/tabs';
import { DragAndDrop } from 'src/app/directives/drag-and-drop';
import { Resources } from 'src/app/services/resources';
import { map, Observable } from 'rxjs';
import { EntityColumn, EntityDataSource, EntityImportData, EntityPage } from 'src/app/services/entity';
import { BackendService, EntityDataSourceImpl } from 'src/app/services/backend-service';
import { monsterEntity } from 'src/app/services/entities';

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
export class Monsters {
  columns: EntityColumn[] = [
    EntityColumn.reference('reference', ''),
    EntityColumn.card('monster', '', false),
    EntityColumn.string('name', 'Name'),
    EntityColumn.enum('type', 'Type', ["Humanoid", "Magic", "Undead"]),
    EntityColumn.image('image', 'Image'),
    EntityColumn.number('level', 'Level'),
    EntityColumn.number('health', 'Health'),
    EntityColumn.number('data.defence.physical', 'Defence').withIcon('DEFENCE_PHYSICAL'),
    EntityColumn.number('data.defence.poison', 'Defence').withIcon('DEFENCE_POISON'),
    EntityColumn.number('data.defence.fire', 'Defence').withIcon('DEFENCE_FIRE'),
    EntityColumn.number('data.defence.cold', 'Defence').withIcon('DEFENCE_COLD'),
  ];

  dataSource?: EntityDataSource;
  monsters?: Monster[];

  monster?: Monster;

  constructor(private monstersService: MonstersService, private resourcesService: Resources,
    private backendService: BackendService
  ) {
    this.dataSource = new EntityDataSourceImpl(this.backendService, monsterEntity);
  }

}
