import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Character, CharacterAction } from 'src/app/services/characters-service';
import { EditCardAttributes } from "../../common/edit-card-attributes/edit-card-attributes";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Icon } from '../../common/icon/icon';
import { ResourceReference } from '../../resources/resource-reference/resource-reference';
import { EditDamage } from '../../common/edit-damage/edit-damage';
import { CardPrintData } from '../../print/print-cards/print-cards';
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";

@Component({
  selector: 'app-edit-character-action',
  imports: [MatButtonModule,
    MatFormFieldModule,
    ResourceSelect,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference, EditCardAttributes, EditDamage, PrintCardThumbnail],
  templateUrl: './edit-character-action.html',
  styleUrl: './edit-character-action.scss'
})
export class EditCharacterAction {
  @Input()
  character!: Character;

  @Input()
  action!: CharacterAction;

  remove = output<void>();
  saved = output<any>();
  closed = output<any>();

  card: CardPrintData = new CardPrintData();

  ngOnInit() {
    this.card.characterAction = this.action;
    this.card.character = this.character;
  }

}
