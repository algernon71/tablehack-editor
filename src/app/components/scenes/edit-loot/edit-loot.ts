import { Component, Input } from '@angular/core';
import { LootCard } from '../../loot/loot-card/loot-card';
import { encounterEntity, Loot, lootEntity } from 'src/app/services/entities';
import { CardPrintData } from '../../print/print-cards/print-cards';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditableTable } from '../../common/editable-table/editable-table';
import { PrintCardThumbnail } from '../../print/print-card-thumbnail/print-card-thumbnail';
import { EditMonsterReference } from '../../monsters/edit-monster-reference/edit-monster-reference';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Icon } from "../../common/icon/icon";
import { SelectIconType } from "../../common/select-icon-type/select-icon-type";
import { EditImage } from "../../common/edit-image/edit-image";
import { Image } from "../../common/image/image";
import { Resources } from 'src/app/services/resources';
import { EditCardAttributes } from "../../common/edit-card-attributes/edit-card-attributes";

@Component({
  selector: 'app-edit-loot',
  imports: [MatTabsModule, MatFormFieldModule, MatInputModule, EditableTable, PrintCardThumbnail, MatSelectModule, FormsModule, MatIcon, Icon, SelectIconType, EditImage, Image, EditCardAttributes],
  templateUrl: './edit-loot.html',
  styleUrl: './edit-loot.scss'
})
export class EditLoot {
  @Input()
  loot!: Loot[];

  lootImages = ['sack.png', 'barrel.png', 'crate.png', 'chest.png', 'treassure_pile.png', 'bookshelf.png'];
  selectedLoot?: Loot;
  lootEntity = lootEntity;
  selectedLootTypeIndex = 0;

  constructor(private resourcesService: Resources) {

  }

  dropFiles(event: any) {
    console.info('dropFiles', event);
    const files: FileList = event.target.files;
    console.info('dropFiles, files', files);
    Array.from(files).forEach(file => {
      const files = [file];
      this.resourcesService.upload('image', files).subscribe(result => {
        this.selectedLoot?.rows?.push({
          count: 1,
          image: file.name,
          type: 'IMAGE',
          itemReference: ''
        });
      });

    });

  }

  ngOnInit() {
    this.loot.forEach(l => {
    });
  }
  uploadImage() {
  }


  addRow(image: string) {
    this.selectedLoot?.rows?.push({
      count: 1,
      image: image,
      type: 'IMAGE',
      itemReference: ''
    });
  }
  cloneRow(row: any) {
    this.selectedLoot?.rows?.push(row);
  }
  cloneEntry() {
    this.loot.push(this.selectedLoot!);
  }

  removeRow(index: number) {
    this.selectedLoot?.rows?.splice(index, 1);
  }

  getEncounterCard(loot: Loot): CardPrintData {
    return {
      loot: loot
    }
  }
}
