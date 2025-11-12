import { Component, Input } from '@angular/core';
import { Entity } from 'src/app/services/entity';
import { EditCharacter } from "../../characters/edit-character/edit-character";
import { EditMonster } from "../../monsters/edit-monster/edit-monster";
import { EditEquipmentItem } from "../../equipment/edit-equipment-item/edit-equipment-item";
import { EditAction } from "../../common/edit-action/edit-action";
import { EditScene } from "../../scenes/edit-scene/edit-scene";

@Component({
  selector: 'app-edit-entity',
  imports: [EditCharacter, EditMonster, EditEquipmentItem, EditAction, EditScene],
  templateUrl: './edit-entity.html',
  styleUrl: './edit-entity.scss'
})
export class EditEntity {
  @Input()
  type!: string;

  @Input()
  entity!: any;
}
