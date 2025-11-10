import { Component } from '@angular/core';
import { Character, CharactersService } from 'src/app/services/characters-service';
import { Resources } from 'src/app/services/resources';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditableTable } from '../../common/editable-table/editable-table';
import { MatTabsModule } from '@angular/material/tabs';
import { EditCharacter } from "../edit-character/edit-character";
import { ActivatedRoute } from '@angular/router';
import { EntityDataSource } from 'src/app/services/entity';
import { BackendService } from 'src/app/services/backend-service';
import { charactersEntity } from 'src/app/services/entities';
import { EntityDataSourceImpl } from 'src/app/services/entity-service';

@Component({
  selector: 'app-characters-manager',
  imports: [
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    EditableTable,
    EditCharacter
  ],
  templateUrl: './characters-manager.html',
  styleUrl: './characters-manager.scss'
})
export class CharactersManager {

  characters?: Character[];

  dataSource?: EntityDataSource;


  character?: Character;

  constructor(
    private charactersService: CharactersService,
    private resourcesService: Resources,
    private route: ActivatedRoute,
    private backendService: BackendService) {

    this.dataSource = new EntityDataSourceImpl(this.backendService, charactersEntity);
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('id');
      console.info('character id :', characterId);
      this.dataSource?.fetchRow({ id: characterId }).subscribe(result => {
        this.character = result;
      });
    });

    this.route.queryParams.subscribe(params => {

    });
  }

  ngOnInit() {
  }



  editClosed() {
    console.info('editClosed');
    this.character = undefined;
  }



}
