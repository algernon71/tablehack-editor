import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { Action, BackendService } from 'src/app/services/backend-service';
import { Defence } from 'src/app/services/monsters';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EditCardAttributes } from "../edit-card-attributes/edit-card-attributes";
import { EditDamage } from "../edit-damage/edit-damage";
import { CdkTableModule } from "@angular/cdk/table";
import { MatIconModule } from '@angular/material/icon';
import { CardPrintData } from '../../print/print-cards/print-cards';
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";
import { EditDefence } from "../edit-defence/edit-defence";

@Component({
  selector: 'app-edit-action',
  imports: [MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    EditCardAttributes, EditDamage, CdkTableModule, PrintCardThumbnail, EditDefence],
  templateUrl: './edit-action.html',
  styleUrl: './edit-action.scss'
})
export class EditAction {

  remove = output<void>();
  @Input()
  action!: Action;
  @Input()
  actorName!: string;
  @Input()
  actorReference!: string;
  @Input()
  characterClass?: string;

  saved = output<any>();
  closed = output<any>();

  card: CardPrintData = new CardPrintData();

  constructor(private backendService: BackendService) {
    console.info('EditAction', this.action, this.backendService);
  }

  ngOnInit() {
    this.card.action = this.action;
    if (this.action && this.action.steps) {
      this.action.steps.forEach(step => {
        if (!step.defence) {
          step.defence = new Defence();
        }
      });
    }
  }

  save() {
    this.saved.emit({});
  }

  cancel() {
    this.closed.emit({});

  }


  addStep(type: string) {
    this.action!.steps.push({
      type: type,
      name: '',
      attributes: '',
      damage: {},

    });
  }
  removeStep(index: number) {
    this.action!.steps.splice(index, 1);
  }

  removeAction() {
    console.info('removeAction');
    this.remove.emit();
  }

  makeStandardAction() {
    console.info('makeStandardAction', this.action, this.characterClass);
    this.backendService.createStandardAction({
      characterClass: this.characterClass,
      action: this.action
    }).subscribe(() => {
      this.remove.emit();
    });
  }
}
