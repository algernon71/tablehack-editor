import { Component, Input, output } from '@angular/core';
import { Monster } from 'src/app/services/monsters';
import { Icon } from "../../common/icon/icon";

export class Stat {
  name!: string;
  icon!: string;
  value?: any;
}

@Component({
  selector: 'app-monster-card',
  imports: [Icon],
  templateUrl: './monster-card.html',
  styleUrl: './monster-card.scss'
})
export class MonsterCard {
  @Input()
  monster?: Monster;

  @Input()
  print = true;
  
  @Input()
  front = true;
  
  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';

  click = output<Monster>();

  stats: Stat[] = [
    {
      icon: 'HEALTH',
      name: 'health'
    },
    {
      icon: 'LEVEL',
      name: "level"
    },
    {
      icon: 'DEFENCE_PHYSICAL',
      name: "physicalDefence"
    },
    {
      icon: 'DEFENCE_POISON',
      name: "poisonDefence"
    },
    {
      icon: 'DEFENCE_FIRE',
      name: "fireDefence"
    },
    {
      icon: 'DEFENCE_COLD',
      name: "coldDefence"
    },
    {
      icon: 'DEFENCE_ELECTRICITY',
      name: "electricityDefence"
    },
    {
      icon: 'DEFENCE_MAGIC',
      name: "magicDefence"
    },
    
    ];

  ngOnInit() { 
    this.refresh();
  }


  
  refresh() { 
  }


}
