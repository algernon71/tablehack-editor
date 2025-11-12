import { Component, Input } from '@angular/core';
import { encounterTypeEntity } from 'src/app/services/entities';
import { ArrayDataSource, Entity, EntityDataSource } from 'src/app/services/entity';
import { EntityService } from 'src/app/services/entity-service';
import { EditableTable } from "../../common/editable-table/editable-table";

@Component({
  selector: 'app-edit-entities',
  imports: [EditableTable],
  templateUrl: './edit-entities.html',
  styleUrl: './edit-entities.scss'
})
export class EditEntities {
  @Input()
  data?: Entity[];


  dataSource?: EntityDataSource;

  @Input()
  selected?: Entity;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new ArrayDataSource(encounterTypeEntity, this.data!);
  }


  editClosed() {
    console.info('editClosed');
    this.selected = undefined;
  }
}
