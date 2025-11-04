import { Component, Input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-edit-damage-value',
  imports: [FormsModule,
    MatInputModule,
    Icon],
  templateUrl: './edit-damage-value.html',
  styleUrl: './edit-damage-value.scss'
})
export class EditDamageValue {
  @Input()
  type!: string;

  @Input()
  tooltip?: string;

  size = 'SMALL';
  value = model<number>();
}
