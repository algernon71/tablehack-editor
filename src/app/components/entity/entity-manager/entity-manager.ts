import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  dataSource?: EntityDataSource;



  selected?: Entity;

  constructor(
    private route: ActivatedRoute,
    private entityService: EntityService) {

    this.route.paramMap.subscribe(params => {
      const entityType = params.get('type')!;
      const entityId = params.get('id');
      // console.info('EntityManager:', entityType, entityId, this.dataSource);
      this.setDataSource(entityType);

      if (entityId) {
        this.dataSource?.fetchRow({ id: entityId }).subscribe(result => {
          this.selected = result;
        });

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
    this.selected = undefined;
  }
}
