import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService, EntityDataSourceImpl } from 'src/app/services/backend-service';
import { PlayerAction, playerActionsEntity } from 'src/app/services/entities';
import { EntityDataSource } from 'src/app/services/entity';
import { EditableTable } from "../../common/editable-table/editable-table";
import { EditAction } from "../../common/edit-action/edit-action";

@Component({
  selector: 'app-edit-standard-actions',
  imports: [EditableTable, EditAction],
  templateUrl: './edit-standard-actions.html',
  styleUrl: './edit-standard-actions.scss'
})
export class EditStandardActions {

  dataSource?: EntityDataSource;


  action?: PlayerAction;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService) {

    this.route.queryParams.subscribe(params => {

    });
    this.dataSource = new EntityDataSourceImpl(this.backendService, playerActionsEntity);
  }
  ngOnInit() {
  }



  editClosed() {
    console.info('editClosed');
    this.action = undefined;
  }
}
