import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CollectionItemCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('colloection-manager');
}
