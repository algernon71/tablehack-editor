import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend-service';
import { equipmentEntity, EquipmentItem } from 'src/app/services/entities';
import { EntityDataSource } from 'src/app/services/entity';
import { EditableTable } from "../../common/editable-table/editable-table";
import { EditEquipmentItem } from "../edit-equipment-item/edit-equipment-item";
import { EntityDataSourceImpl } from 'src/app/services/entity-service';

@Component({
  selector: 'app-equipment-manager',
  imports: [EditableTable, EditEquipmentItem],
  templateUrl: './equipment-manager.html',
  styleUrl: './equipment-manager.scss'
})
export class EquipmentManager {


  dataSource?: EntityDataSource;


  item?: EquipmentItem;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService) {

    this.route.queryParams.subscribe(params => {

    });
    this.dataSource = new EntityDataSourceImpl(this.backendService, equipmentEntity);
  }
  ngOnInit() {
  }



  editClosed() {
    console.info('editClosed');
    this.item = undefined;
  }
}
