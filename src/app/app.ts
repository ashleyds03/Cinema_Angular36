import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cinema } from './cinema/cinema';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cinema],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cinema_Angular36');
}
