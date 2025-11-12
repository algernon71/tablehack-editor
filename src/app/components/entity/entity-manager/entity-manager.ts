import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend-service';
import { EquipmentItem } from 'src/app/services/entities';
import { Entity, EntityDataSource } from 'src/app/services/entity';
import { EntityService } from 'src/app/services/entity-service';
import { EditableTable } from "../../common/editable-table/editable-table";
import { EditEntity } from "../edit-entity/edit-entity";

@Component({
  selector: 'app-entity-manager',
  imports: [EditableTable, EditEntity],
  templateUrl: './entity-manager.html',
  styleUrl: './entity-manager.scss'
})
export class EntityManager {



  entityType?: string;
  @Input()
  dataSource?: EntityDataSource;


  @Input()
  selected?: Entity;

  constructor(
    private route: ActivatedRoute,
    private entityService: EntityService, private router: Router) {


    this.route.paramMap.subscribe(params => {
      this.entityType = params.get('type')!;
      const entityId = params.get('id');
      console.info('EntityManager:', this.entityType, entityId, this.dataSource);
      this.setDataSource(this.entityType);

      if (entityId) {
        this.dataSource?.fetchRow({ id: entityId }).subscribe(result => {
          this.selected = result;
        });

      } else {
        this.selected = undefined;
      }
    });

    this.route.queryParams.subscribe(params => {

    });
  }

  ngOnInit() {
  }

  setDataSource(entityType: string) {
    const dataSource = this.entityService.getDataSource(entityType)!;
    if (!this.dataSource?.getTypeId() || this.dataSource?.getTypeId() != dataSource.getTypeId()) {
      this.dataSource = dataSource;
      this.selected = undefined;

    }
  }

  editClosed() {
    console.info('editClosed');
    this.router.navigate(['entities', this.entityType]);
    this.selected = undefined;
  }

  selectRow(row: any) {
    console.info('selectRow()', row);
    if (row) {
      this.router.navigate(['entities', this.entityType, row.id]);

    } else {
      this.router.navigate(['entities', this.entityType]);

    }
    //     this.selected = row;
  }
}
