import { Component } from '@angular/core';
import { CardPrintData, PrintCards } from '../../print/print-cards/print-cards';
import { EntityService } from 'src/app/services/entity-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Scene, sceneEntity } from 'src/app/entities';
import { EntityDataSource } from 'src/app/services/entity';

@Component({
  selector: 'app-print-scene-cards',
  imports: [PrintCards],
  templateUrl: './print-scene-cards.html',
  styleUrl: './print-scene-cards.scss'
})
export class PrintSceneCards {
  cards!: CardPrintData[];
  ids?: string;
  cardTypes?: string;
  dataSource?: EntityDataSource;

  constructor(private entityService: EntityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      console.info('PrintSceneCards params', params);
      this.ids = params['ids'];
      this.cardTypes = params['cardTypes'];
    });
  }
  ngOnInit() {
    console.info('PrintMonsterCards.ngOnInit', this);
    this.dataSource = this.entityService.getDataSource(sceneEntity.typeId);
    this.refreshList();

  }

  refreshList() {
    console.info('PrintMonsterCards.refreshList', this);
    this.dataSource?.fetchRows(0, 1000).subscribe(response => {
      console.info('PrintMonsterCards.refreshList, response:', response);
      this.cards = [];

      const scenes: Scene[] = response.content!;
      scenes.forEach(scene => {

        scene.data?.locationEvents.forEach(locationEvent => {
          this.cards.push(
            {
              locationEvent: locationEvent
            }
          );

        });
        scene.data?.lootTypes?.forEach(type => {
          type.loot?.forEach(l => {
            const count = !l.count ? 1 : l.count;
            for (let i = 0; i < count; ++i) {
              this.cards.push(
                {
                  loot: l
                }
              );

            }

          });

        });
        scene.data?.encounterTypes?.forEach(type => {

          type.encounters?.forEach(encounter => {
            const count = !encounter.count ? 1 : encounter.count;
            for (let i = 0; i < count; ++i) {
              this.cards.push(
                {
                  encounter: encounter
                }
              );

            }

          });

        });

      });
    });



  }

}
