import { Component, Input } from '@angular/core';
import { Damage } from 'src/app/services/monsters';
import { EditDamageValue } from "../edit-damage-value/edit-damage-value";

@Component({
  selector: 'app-edit-damage',
  imports: [EditDamageValue],
  templateUrl: './edit-damage.html',
  styleUrl: './edit-damage.scss'
})
export class EditDamage {

  @Input()
  damage!: Damage;
}
