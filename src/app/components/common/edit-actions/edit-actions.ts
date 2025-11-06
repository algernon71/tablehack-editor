import { Component, Input } from '@angular/core';
import { Action } from 'src/app/services/backend-service';
import { EditAction } from "../edit-action/edit-action";

@Component({
  selector: 'app-edit-actions',
  imports: [EditAction],
  templateUrl: './edit-actions.html',
  styleUrl: './edit-actions.scss'
})
export class EditActions {

  @Input()
  actions!: Action[];

  addAction() {
    const action = new Action();
    this.actions.push(action);
  }

  deleteAction(index: number) {
    console.info('deleteAction', event);
    this.actions.splice(index, 1);
  }

}
