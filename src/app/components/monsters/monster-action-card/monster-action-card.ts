import { Component, Input, output } from '@angular/core';
import { MonsterAction } from 'src/app/services/monsters';
import { Icon } from '../../common/icon/icon';

@Component({
  selector: 'app-monster-action-card',
  imports: [Icon],
  templateUrl: './monster-action-card.html',
  styleUrl: './monster-action-card.scss'
})
export class MonsterActionCard {
  @Input()
  action?: MonsterAction;

  @Input()
  print = true;
  
  @Input()
  front = true;
  
  @Input()
  back = true;

  mainStatIconSize = 'LARGE';
  statIconSize = 'SMALL';

  click = output<MonsterAction>();
}
