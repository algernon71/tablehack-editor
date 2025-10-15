import { Component, Input } from '@angular/core';

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
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon {
  @Input()
  type!: string;

  @Input()
  size: string = "SMALL";
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
      case "LEVEL":
        return "star.svg";

      default:
        return "questionmark.svg";


    }
  }

}
