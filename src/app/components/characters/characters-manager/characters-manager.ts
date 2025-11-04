import { Component } from '@angular/core';
import { Character, CharactersService } from 'src/app/services/characters-service';
import { Resources } from 'src/app/services/resources';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DataPage, DataSource, EditableField, EditableTable, ImportRowData, RowData } from '../../common/editable-table/editable-table';
import { MatTabsModule } from '@angular/material/tabs';
import { DragAndDrop } from 'src/app/directives/drag-and-drop';
import { CharacterCard } from "../character-card/character-card";
import { EditCharacter } from "../edit-character/edit-character";
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Import } from '@angular/cdk/schematics';

@Component({
  selector: 'app-characters-manager',
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
    CharacterCard,
    EditCharacter
  ],
  templateUrl: './characters-manager.html',
  styleUrl: './characters-manager.scss'
})
export class CharactersManager implements DataSource {
  fields: EditableField[] = [
    {
      name: 'name',
      label: 'Name',
      description: '',
      type: 'string',
      editable: true
    },
    {
      name: 'characterClass',
      label: 'Class',
      description: '',
      type: 'enum',
      editable: true,
      values: ["Warrior", "Knight", "Barbarian", "Wizard", "Druid", "Bard", "Paladin", "Thief", "Monk", "Ranger"]
    },
    {
      name: 'image',
      label: 'Image',
      description: '',
      type: 'image',
      editable: true
    },

  ];
  characters?: Character[];

  character?: Character;

  constructor(private charactersService: CharactersService, private resourcesService: Resources, private route: ActivatedRoute) {

    this.route.queryParams.subscribe(params => {

    });
  }
  ngOnInit() {
  }


  fetchRows(page: number, pageSize: number): Observable<DataPage> {
    return this.charactersService.getCharacters().pipe(map(response => {
      const page: DataPage = {
        content: response
      };
      return page;
    }));

  }


  editCharacter(event: RowData) {
    console.info('editCharacter', event);
    this.character = event.row;
  }

  editClosed() {
    console.info('editClosed');
    this.character = undefined;
  }


  addRow(): Observable<Character> {
    const newCharacter = new Character();
    return this.charactersService.addCharacter(newCharacter);
  }

  fetchRow(character: Character): Observable<Character> {
    return this.charactersService.getCharacter(character.id!);
  }

  saveRow(character: Character): Observable<Character> {
    return this.charactersService.updateCharacter(character);
  }

  deleteRow(character: Character): Observable<void> {
    return this.charactersService.deleteCharacter(character);
  }

  importRow(importData: ImportRowData): Observable<ImportRowData> {
    const newCharacter = new Character();
    newCharacter.image = importData.image;
    newCharacter.name = importData.name!;
    return this.charactersService.addCharacter(newCharacter).pipe(map(character => {
      const importedRow: ImportRowData = {
        id: character.id,
        name: character.name,
        image: character.image

      };
      return importedRow;
    }));

  }

}
