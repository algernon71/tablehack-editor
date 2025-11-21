import { Component, Input, model } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Icon } from "../icon/icon";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-select-icon-type',
  imports: [MatButtonModule, MatSelectModule, Icon],
  templateUrl: './select-icon-type.html',
  styleUrl: './select-icon-type.scss'
})
export class SelectIconType {

  type = model<string>();

  @Input()
  types!: string[];

  select(t: string) {


  }
}
