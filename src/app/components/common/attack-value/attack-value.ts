import { Component, Input } from '@angular/core';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-attack-value',
  imports: [Icon],
  templateUrl: './attack-value.html',
  styleUrl: './attack-value.scss'
})
export class AttackValue {
  @Input()
  type!: string;

  @Input()
  size!: string;

  @Input()
  value?: string;
}
