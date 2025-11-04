import { Component, Input } from '@angular/core';
import { Damage } from 'src/app/services/monsters';
import { AttackValue } from "../attack-value/attack-value";

@Component({
  selector: 'app-attack-values',
  imports: [AttackValue],
  templateUrl: './attack-values.html',
  styleUrl: './attack-values.scss'
})
export class AttackValues {
  @Input()
  size: string = 'SMALL';

  @Input()
  damage?: Damage;
}
