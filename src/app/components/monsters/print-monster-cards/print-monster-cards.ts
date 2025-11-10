import { Component } from '@angular/core';
import { CardPrintData, PrintCards } from "../../print/print-cards/print-cards";
import { Monster, MonstersService } from 'src/app/services/monsters';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-print-monster-cards',
  imports: [PrintCards],
  templateUrl: './print-monster-cards.html',
  styleUrl: './print-monster-cards.scss'
})
export class PrintMonsterCards {
  cards!: CardPrintData[];
  includeMonsterCards = true;
  includeActions = true;
  monsterIds?: string;

  constructor(private monstersService: MonstersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.info('PrintMonsterCards params', params);
      this.monsterIds = params['ids'];
      this.includeActions = params['actions'] != 'false';
      this.includeMonsterCards = params['monsters'] != 'false';
      console.info('PrintMonsterCards , this:', this);

    });
  }
  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.monstersService.getMonsters(this.monsterIds).subscribe(response => {
      console.info('PrintMonsterCards.refreshList, response:', response);
      this.cards = [];
      const monsters: Monster[] = response.content!;
      monsters.forEach(monster => {
        if (this.includeMonsterCards) {
          this.cards.push(
            {
              monster: monster
            }
          );

        }

        if (this.includeActions) {
          monster.data?.actions?.forEach(action => {
            const count = !action.count ? 1 : action.count;
            for (let i = 0; i < count; ++i) {
              this.cards.push(
                {
                  action: action,
                  actorName: monster.name,
                  actorReference: monster.reference
                }
              );

            }

          });

        }


      });
      console.info('PrintMonsterCards.refreshList, cards:', this.cards);
    });

  }
}
