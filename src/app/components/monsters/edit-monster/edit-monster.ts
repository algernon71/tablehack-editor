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
import { Resources } from 'src/app/services/resources';
import { ResourceReference } from "../../resources/resource-reference/resource-reference";

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
    Icon,
    ResourceReference
],
  templateUrl: './edit-monster.html',
  styleUrl: './edit-monster.scss'
})
export class EditMonster {
  @Input()
  monster?: Monster;

  saved = output<any>();
  closed = output<any>();
  constructor(private monstersService: MonstersService, 
    public resourcesService: Resources) {
  
  }
  
  uploadImage(event: any) {
      console.info('uploadImage:', event);
      const file:File = event.target.files[0];
      const files = [file];
      console.info('file:', file);
      this.resourcesService.upload('image', files).subscribe(result => {
        this.monster!.image = file.name;
        console.info('upload:', result);
      });
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
