import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterAction, CharactersService } from 'src/app/services/characters-service';
import { CardPrintData, PrintCards } from '../../print/print-cards/print-cards';
import { Action, BackendService } from 'src/app/services/backend-service';
import { charactersEntity, PlayerAction } from 'src/app/services/entities';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-print-character-cards',
  imports: [PrintCards],
  templateUrl: './print-character-cards.html',
  styleUrl: './print-character-cards.scss'
})
export class PrintCharacterCards {
  cards!: CardPrintData[];
  standardActions?: PlayerAction[];
  includeCharacterCards = true;
  includeActions = true;
  actionsLast = true;
  characterIds?: string;

  constructor(private charactersService: CharactersService,
    private backendService: BackendService,
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
    this.reload();
  }
  reload() {
    this.backendService.getAllStandardActions().subscribe(response => {
      this.standardActions = response;
      this.populateCards();
    });
  }

  populateCards() {
    this.backendService.getEntities(charactersEntity, this.characterIds).subscribe(response => {
      console.info('refreshList, response:', response);
      const characters: Character[] = response.content!;
      this.cards = [];
      if (this.includeCharacterCards) {
        characters.forEach(character => {
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
        characters.forEach(character => {
          console.info('character actions:', character.data.actions, character);

          if (character.data.actions) {
            character.data.actions.forEach(action => {
              const count = !action.count ? 1 : action.count;
              for (let i = 0; i < count; ++i) {
                this.addCharacterActionCard(action, character);

              }

            });

          }


          console.info('standardActions:', this.standardActions);
          this.standardActions!.forEach(standardAction => {
            if (!standardAction.characterClass ||
              standardAction.characterClass == 'All' ||
              standardAction.characterClass == character.characterClass) {
              const action = standardAction.action;
              console.info('Adding standardAction:', standardAction);
              const count = !action.count ? 1 : action.count;
              for (let i = 0; i < count; ++i) {
                this.addCharacterActionCard(action, character);

              }

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
  addCharacterActionCard(action: Action, character: Character) {
    console.info('addCharacterActionCard', action, character);
    this.cards.push(
      {
        actorName: character.name,
        action: action,
      }
    );
  }
}
