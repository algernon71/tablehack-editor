import { Component, input, Input, output } from '@angular/core';
import { Character, CharacterAction, CharactersService } from 'src/app/services/characters-service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Icon, IconType, IconSize } from "../../common/icon/icon";
import { Resources } from 'src/app/services/resources';
import { ResourceReference } from "../../resources/resource-reference/resource-reference";
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { EditCardAttributes } from "../../common/edit-card-attributes/edit-card-attributes";
import { RouterLink } from "@angular/router";
import { CharacterCard } from "../character-card/character-card";
import { EditCharacterAction } from "../edit-character-action/edit-character-action";
import { ConfirmationData, ConfirmationDialog } from '../../common/confirmation-dialog/confirmation-dialog';
import { MatDialog } from '@angular/material/dialog';
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";
import { CardPrintData } from '../../print/print-cards/print-cards';

@Component({
  selector: 'app-edit-character',
  imports: [MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    ResourceSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference,
    RouterLink, CharacterCard, EditCharacterAction, PrintCardThumbnail],
  templateUrl: './edit-character.html',
  styleUrl: './edit-character.scss'
})
export class EditCharacter {

  @Input()
  character!: Character;


  card: CardPrintData = new CardPrintData();
  previewCard = true;

  saved = output<any>();
  closed = output<any>();
  constructor(private dialog: MatDialog, private charactersService: CharactersService,
    public resourcesService: Resources) {

  }



  uploadImage(event: any) {
    console.info('uploadImage:', event);
    const file: File = event.target.files[0];
    const files = [file];
    console.info('file:', file);
    this.resourcesService.upload('image', files).subscribe(result => {
      this.character!.image = file.name;
      console.info('upload:', result);
    });
  }


  ngOnInit() {
    console.info('Editing character:', this.character);
    this.card.character = this.character;
    this.card.largeCard = true;
  }

  delete() {
    ConfirmationDialog.confirm(this.dialog, 'Delete character?', 'Are you sure?', (confirmed) => {
      console.info('confirmed: ', confirmed);
      if (confirmed) {
        this.charactersService.deleteCharacter(this.character).subscribe(result => {
          this.closed.emit("");
        });
      }
    });
  }
  save() {
    console.info("save", this.saved);
    this.charactersService.updateCharacter(this.character!).subscribe(response => {
      if (this.saved) {
        this.saved.emit({});

      }

    });
  }

  cancel() {
    this.closed.emit("");

  }

  addAction() {
    console.info('addAction', this.character);
    const action = new CharacterAction();
    if (!this.character?.data) {
    }
    this.character!.data!.actions!.push(action);
    console.info('addAction done', this.character);
  }

  deleteAction(index: number) {
    console.info('deleteAction', event);
    this.character!.data!.actions!.splice(index, 1);
  }

}
