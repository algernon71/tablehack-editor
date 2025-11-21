import { Component, Input } from '@angular/core';
import { EquipmentItem } from 'src/app/services/entities';
import { LootToken } from "../../common/tokens/loot-token/loot-token";
import { AttackValues } from "../../common/attack-values/attack-values";
import { DefenceValues } from "../../common/defence-values/defence-values";
import { Image } from "../../common/image/image";
import { CardStat } from "../../common/card-stat/card-stat";

@Component({
  selector: 'app-equipment-item-card',
  imports: [LootToken, AttackValues, DefenceValues, Image, CardStat],
  templateUrl: './equipment-item-card.html',
  styleUrl: './equipment-item-card.scss'
})
export class EquipmentItemCard {
  @Input()
  item!: EquipmentItem;

  @Input()
  print = true;

  @Input()
  front = true;

  @Input()
  back = true;

  hasAttackValues() {
    if (!this.item.data.damage) {
      return false;
    }
    switch (this.item.type) {
      case "WEAPON_RANGE":
      case "WEAPON_MELEE":
      case "RING":
        return true;
    }
    return false;
  }
  hasDefenceValues() {
    switch (this.item.type) {
      case "ARMOR":
      case "RING":
        return true;
    }
    return false;
  }
}
