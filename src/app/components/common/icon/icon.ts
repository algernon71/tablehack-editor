import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

export enum IconSize {
  SMALL,
  MEDIUM,
  LARGE
}

export enum IconType {
  HEALTH,
  MANA,
  DEFENCE_PHYSICAL,
  DEFENCE_FIRE,
  DEFENCE_ELECTRICITY,
  DEFENCE_COLD,
  DEFENCE_MAGIC
}

@Component({
  selector: 'app-icon',
  imports: [MatTooltipModule],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  @Input()
  type!: string;

  @Input()
  size: string = "SMALL";

  @Input()
  tooltip?: string;

  url() {
    return '/public/images/symbols/' + this.filename();
  }

  filename() {
    switch (this.type) {
      case "HEALTH":
        return "heart.svg";
      case "MANA":
        return "mana.svg";
      case "DEFENCE_PHYSICAL":
        return "defence_physical.svg";
      case "DEFENCE_FIRE":
        return "defence_fire.svg";
      case "DEFENCE_COLD":
        return "defence_cold.svg";
      case "DEFENCE_ELECTRICITY":
        return "defence_electricity.svg";
      case "DEFENCE_POISON":
        return "defence_poison.svg";
      case "DEFENCE_MAGIC":
        return "defence_magic.svg";
      case "ATTACK_PHYSICAL":
        return "damage_physical.svg";
      case "ATTACK_FIRE":
        return "damage_fire.svg";
      case "ATTACK_COLD":
        return "damage_cold.svg";
      case "ATTACK_ELECTRICITY":
        return "damage_electricity.svg";
      case "ATTACK_POISON":
        return "damage_poison.svg";
      case "ATTACK_FEAR":
        return "damage_scare.svg";
      case "ATTACK_LIFE":
        return "damage_life.svg";
      case "ATTACK_ENERGY":
        return "damage_energy.svg";
      case "ATTACK_GROUP":
        return "group.svg";
      case "ATTACK_AREA":
        return "area.svg";
      case "ATTACK_CONE":
        return "cone.svg";
      case "ATTACK_EXPLOSION":
        return "damage_explosion.svg";
      case "LEVEL":
        return "star.svg";
      case "INF":
        return "infinity.svg";
      case "CARD_PULL":
        return "card-draw.svg";
      case "CARD_SHUFFLE":
        return "card_shuffle.svg";
      case "CARD_LOST":
        return "card_lost.svg";
      case "MOVE_WALK":
        return "walk.svg";
      case "MOVE_FLY":
        return "wings.svg";
      case "MOVE_TELEPORT":
        return "teleport.svg";

      default:
        return "questionmark.svg";


    }
  }

}
