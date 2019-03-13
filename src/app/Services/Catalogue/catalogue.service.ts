import { Injectable } from '@angular/core';
import { Game } from '../../Models/Game';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  catalogue: Game[];

  constructor() {

    this.catalogue = [
      new Game('Donald', 'Enfant',
          'Canard Game can play with other person.. this is example.. Buy currency', 'GameBoy'),
      new Game('Picsou', 'Adult', 'Canard Dance', 'Sega')
    ];
  }

  getListCatalogue() {
    if (localStorage.getItem('catalogue') === null ) {
      this.catalogue = [];
    } else {
      this.catalogue = JSON.parse(localStorage.getItem('catalogue'));
    }
    return this.catalogue;
  }

  addGame(game: Game) {
    this.catalogue.push(game);
    let cat = [];
    if (localStorage.getItem('catalogue') === null) {
      cat = [];
      cat.push(game);
      // localStorage.setItem('catalogue', JSON.stringify(cat));
    } else {
      cat = JSON.parse(localStorage.getItem('catalogue'));
      cat.push(game);
      // localStorage.setItem('catalogue', JSON.stringify(cat));
    }
    localStorage.setItem('catalogue', JSON.stringify(cat));
  }

  removeGame(game: Game) {
    for (let i = 0; i < this.catalogue.length; i++) {
      if (game === this.catalogue[i]) {
        this.catalogue.splice(i, 1);
        localStorage.setItem('catalogue', JSON.stringify(this.catalogue));
      }
    }
  }
  editGame(game: Game) {
    this.removeGame(game);
    this.addGame(game);
  }

}
