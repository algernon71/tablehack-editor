import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDrop {

  @Output() appDragAndDrop = new EventEmitter<Array<File>>();

  @HostBinding('class.dropping')
  dropping: boolean = false;

  constructor() { }


  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropping = true;
    // Add your logic here to handle the dragover event
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropping = false;
    // Add your logic here to handle the dragleave event
  }
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropping = false;
    const files = Array.from(event.dataTransfer?.files || []);
    this.appDragAndDrop.emit(files);
    // Add your logic here to handle the drop event
  }
}
