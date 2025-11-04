import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GameCardAttributes } from 'src/app/services/encounter-service';
import { Icon } from "../icon/icon";

@Component({
  selector: 'app-edit-card-attributes',
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    Icon
  ],
  templateUrl: './edit-card-attributes.html',
  styleUrl: './edit-card-attributes.scss'
})
export class EditCardAttributes {
  @Input()
  attributes!: GameCardAttributes;

}
