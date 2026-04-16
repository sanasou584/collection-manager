import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CollectionItemCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('colloection-manager');
  coin! :CollectionItem;
  constructor(){
    this.coin = new CollectionItem();
    this.coin.name = 'piece de 1979',
    this.coin.description ='Un avatar inspiré d’un héros légendaire,courageux et agile',
    this.coin.price=170,
    this.coin.rarity='Commune',
    this.coin.image='img/linx.png'
  }
}
