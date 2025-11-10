import { Component, Input } from '@angular/core';
import { EquipmentItem } from 'src/app/services/entities';

@Component({
  selector: 'app-edit-equipment-item',
  imports: [],
  templateUrl: './edit-equipment-item.html',
  styleUrl: './edit-equipment-item.scss'
})
export class EditEquipmentItem {
  @Input()
  item!: EquipmentItem;

}
