import { Component } from '@angular/core';
import { CardPrintData, PrintCards } from '../../print/print-cards/print-cards';
import { EntityDataSource } from 'src/app/services/entity';
import { EntityService } from 'src/app/services/entity-service';
import { ActivatedRoute, Router } from '@angular/router';
import { equipmentEntity, EquipmentItem } from 'src/app/entities';

@Component({
  selector: 'app-print-equipment-cards',
  imports: [PrintCards],
  templateUrl: './print-equipment-cards.html',
  styleUrl: './print-equipment-cards.scss'
})
export class PrintEquipmentCards {
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
    this.dataSource = this.entityService.getDataSource(equipmentEntity.typeId);
    this.refreshList();

  }

  refreshList() {
    console.info('PrintMonsterCards.refreshList', this);
    this.dataSource?.fetchRows(0, 1000).subscribe(response => {
      this.cards = [];

      const items: EquipmentItem[] = response.content!;
      items.forEach(item => {

        this.cards.push(
          {
            equipment: item
          }
        );



      });
    });
  }
}
