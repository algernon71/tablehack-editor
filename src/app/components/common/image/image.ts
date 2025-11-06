import { provideImgixLoader } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  providers: [
    provideImgixLoader("http://localhost:8090/api/resources/"),],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class Image {
  @Input()
  name!: string;

  @Input()
  className!: string;

  @Input()
  width!: number;
  @Input()
  height!: number;

  url(): string {
    return 'http://localhost:8090/api/resources/' + this.name;
  }
}
