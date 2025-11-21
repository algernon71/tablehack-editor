import { Component } from '@angular/core';
import { CardPrintData, PrintCards } from '../../print/print-cards/print-cards';
import { Entity, EntityDataSource } from 'src/app/services/entity';
import { EntityService } from 'src/app/services/entity-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-print-entities',
  imports: [PrintCards],
  templateUrl: './print-entities.html',
  styleUrl: './print-entities.scss'
})
export class PrintEntities {
  entityId?: string;
  cards!: CardPrintData[];
  ids?: string;
  cardTypes?: string;
  dataSource?: EntityDataSource;

  constructor(private entityService: EntityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      console.info('PrintEntities params', params);
      this.entityId = params.get('entityId')!;

    });

    this.route.queryParams.subscribe(params => {
      console.info('PrintEntities query params', params);
      this.ids = params['ids'];
      this.cardTypes = params['subTypes'];
    });
  }

  ngOnInit() {
    console.info('PrintEntities.ngOnInit', this);
    this.dataSource = this.entityService.getDataSource(this.entityId!);
    this.refreshList();

  }

  refreshList() {
    console.info('PrintEntities.refreshList', this);
    this.dataSource?.fetchRows(0, 1000).subscribe(response => {
      console.info('PrintEntities.refreshList, response:', response);
      this.cards = [];

      const entities: Entity[] = response.content!;

      entities.forEach(entity => {
        console.info('PrintEntities, entity:', entity);

        const entityCards = this.dataSource?.getInfo().buildPrintCards(entity)!;
        entityCards.forEach(card => {
          this.cards.push(card);
          console.info('PrintEntities, entity card:', card);
        });



      });
    });



  }
}
