import { Component, Input, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ResourceSelect } from '../../resources/resource-select/resource-select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Monster, MonstersService } from 'src/app/services/monsters';
import { MatSelectModule } from '@angular/material/select';
import { Icon, IconType, IconSize } from "../../common/icon/icon";

@Component({
  selector: 'app-edit-monster',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    ResourceSelect,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    Icon
],
  templateUrl: './edit-monster.html',
  styleUrl: './edit-monster.scss'
})
export class EditMonster {
  @Input()
  monster?: Monster;

  saved = output<any>();
  closed = output<any>();

  constructor(private monstersService: MonstersService) {
  
  }
  ngOnInit(		) {
    
  }

  save() { 
    console.info("save", this.saved);
    this.monstersService.updateMonster(this.monster!).subscribe(response => {
      if (this.saved) {
        this.saved.emit({});

      }

    });
  }

  cancel() { 
    this.closed.emit("");

  }
}
