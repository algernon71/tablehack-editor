import { Component, Injector, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './modules';
import { createCustomElement } from '@angular/elements';
import { Thlogo } from './elements/thlogo/thlogo';
import { Thstat } from './elements/thstat/thstat';
import {CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    AppModule, 
    CdkTableModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tablehack-editor');

  constructor(private injector: Injector) {

	}

	
	ngOnInit() {
    // console.info("customElements:", customElements);
    // customElements.define('th-logo', createCustomElement(Thlogo, { injector: this.injector }));
    // customElements.define('th-stat', createCustomElement(Thstat, { injector: this.injector }));
    
	}

}
