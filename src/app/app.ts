import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './modules';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tablehack-editor');
}
