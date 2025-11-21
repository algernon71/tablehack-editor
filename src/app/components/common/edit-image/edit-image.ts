import { Component, model } from '@angular/core';
import { Resources } from 'src/app/services/resources';
import { Image } from "../image/image";
import { DragAndDrop } from 'src/app/directives/drag-and-drop';

@Component({
  selector: 'app-edit-image',
  imports: [Image, DragAndDrop],
  templateUrl: './edit-image.html',
  styleUrl: './edit-image.scss'
})
export class EditImage {
  image = model<string>();

  constructor(private resourcesService: Resources) {

  }

  dropFiles(files: File[]) {
    console.info('dropFiles', event);
    files.forEach(file => {
      const files = [file];
      this.resourcesService.upload('image', files).subscribe(result => {
        this.image.set(file.name);
      });

    });

  }

}
