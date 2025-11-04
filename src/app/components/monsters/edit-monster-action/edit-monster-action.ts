import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { Monster, MonsterAction } from 'src/app/services/monsters';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Icon } from '../../common/icon/icon';
import { ResourceReference } from '../../resources/resource-reference/resource-reference';
import { EditableField } from '../../common/editable-table/editable-table';
import { MonsterActionCard } from "../monster-action-card/monster-action-card";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EditCardAttributes } from "../../common/edit-card-attributes/edit-card-attributes";
import { EditDamage } from "../../common/edit-damage/edit-damage";
import { CdkTableModule } from "@angular/cdk/table";
import { MatIconModule } from '@angular/material/icon';
import { CardPrintData } from '../../print/print-cards/print-cards';
import { PrintCardThumbnail } from "../../print/print-card-thumbnail/print-card-thumbnail";
import { DefenceValue } from "../../common/defence-value/defence-value";
import { EditDefence } from "../../common/edit-defence/edit-defence";

@Component({
  selector: 'app-edit-monster-action',
  imports: [MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    ResourceSelect,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon,
    ResourceReference, MonsterActionCard, EditCardAttributes, EditDamage, CdkTableModule, PrintCardThumbnail, DefenceValue, EditDefence],
  templateUrl: './edit-monster-action.html',
  styleUrl: './edit-monster-action.scss'
})
export class EditMonsterAction {

  remove = output<void>();
  @Input()
  action!: MonsterAction;
  @Input()
  monster!: Monster;
  saved = output<any>();
  closed = output<any>();

  card: CardPrintData = new CardPrintData();

  ngOnInit() {
    this.card.monster = this.monster;
    this.card.monsterAction = this.action;
  }

  save() {
    this.saved.emit({});
  }

  cancel() {
    this.closed.emit({});

  }


  addStep() {
    this.action!.steps.push({
      type: 'MOVE',
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
}
