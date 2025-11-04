import { Component, Input } from '@angular/core';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-defence-value',
  imports: [Icon],
  templateUrl: './defence-value.html',
  styleUrl: './defence-value.scss'
})
export class DefenceValue {
  @Input()
  type!: string;

  @Input()
  size!: string;

  @Input()
  value?: string;


}
