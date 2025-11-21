import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EquipmentItem, itemCategories, ItemType, itemTypes } from 'src/app/entities';
import { EditDamage } from "../../common/edit-damage/edit-damage";
import { EditDefence } from "../../common/edit-defence/edit-defence";
import { EditAction } from "../../common/edit-action/edit-action";
import { Damage, Defence } from 'src/app/services/monsters';
import { MatSelectModule } from '@angular/material/select';
import { EditImage } from "../../common/edit-image/edit-image";

@Component({
  selector: 'app-edit-equipment-item',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule, EditDamage, EditDefence, EditAction, EditImage],
  templateUrl: './edit-equipment-item.html',
  styleUrl: './edit-equipment-item.scss'
})
export class EditEquipmentItem {

  @Input()
  item!: EquipmentItem;

  itemTypes = itemTypes;
  itemCategories = itemCategories;

  itemType?: ItemType;


  ngOnInit() {
    console.info('init item:', this.item);
    if (!this.item.data.damage) {
      this.item.data.damage = new Damage();
    }
    if (!this.item.data.defence) {
      this.item.data.defence = new Defence();
    }
    this.refreshType();
  }

  typeChanged(value: any, event: any) {
    if (event.isUserInput) {
      this.item.type = value;
      this.item.subType = undefined;
      console.info('typeChanged', value, event);
      this.refreshType();
    }
  }
  subTypeChanged(value: any, event: any) {
    if (event.isUserInput) {
      this.item.subType = value;
      this.refreshType();
    }
  }

  refreshType() {

    if (!this.item.category) {
      this.item.category = this.itemCategories[0].id;
    }
    if (!this.item.type) {
      this.item.type = this.itemTypes[0].id;
    }
    this.itemType = this.itemTypes.find(type => type.id == this.item.type);

    if (this.itemType?.subtypes && !this.item.subType) {
      this.item.subType = this.itemType?.subtypes[0].id;
    }
  }

  hasDamage() {
  }

}
