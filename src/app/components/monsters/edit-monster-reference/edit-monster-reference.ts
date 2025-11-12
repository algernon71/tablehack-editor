import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface User {
  name: string;
}

@Component({
  selector: 'app-edit-monster-reference',
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-monster-reference.html',
  styleUrl: './edit-monster-reference.scss'
})
export class EditMonsterReference {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}