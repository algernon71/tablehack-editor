import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterAction, CharactersService } from 'src/app/services/characters-service';
import { CardPrintData, PrintCards } from '../../print/print-cards/print-cards';

@Component({
  selector: 'app-print-character-cards',
  imports: [PrintCards],
  templateUrl: './print-character-cards.html',
  styleUrl: './print-character-cards.scss'
})
export class PrintCharacterCards {
  cards!: CardPrintData[];
  includeCharacterCards = true;
  includeActions = true;
  actionsLast = true;
  characterIds?: string;

  constructor(private charactersService: CharactersService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.info('PrintCharacterCards params', params);
      this.characterIds = params['ids'];
      this.includeActions = params['actions'] != 'false';
      this.includeCharacterCards = params['characters'] != 'false';
      this.actionsLast = params['actions-last'] != 'false';
      console.info('PrintCharacterCards , this:', this);

    });
  }
  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.charactersService.getCharacters(this.characterIds).subscribe(response => {
      console.info('refreshList, response:', response);
      this.cards = [];
      if (this.includeCharacterCards) {
        response.forEach(character => {
          this.addCharacterCard(character);
          if (!this.actionsLast) {
            character.data?.actions?.forEach(action => {
              const count = !action.count ? 1 : action.count;
              for (let i = 0; i < count; ++i) {
                this.addCharacterActionCard(action, character);

              }

            });

          }

        });
      }

      if (this.includeActions && this.actionsLast) {
        response.forEach(character => {
          character.data?.actions?.forEach(action => {
            const count = !action.count ? 1 : action.count;
            for (let i = 0; i < count; ++i) {
              this.addCharacterActionCard(action, character);

            }

          });



        });
      }
    });

  }

  addCharacterCard(character: Character) {
    this.cards.push(
      {
        largeCard: true,
        character: character
      }
    );
  }
  addCharacterActionCard(action: CharacterAction, character: Character) {
    this.cards.push(
      {
        characterAction: action,
        character: character
      }
    );
  }
}
