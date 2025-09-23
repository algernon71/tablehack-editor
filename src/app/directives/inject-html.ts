import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[injectHTML]'
})
export class InjectHTML {

  constructor(private host: ElementRef) {} 

  @Input() set injectHTML(content: string) {
    this.host.nativeElement.innerHTML = content;
  }

}
