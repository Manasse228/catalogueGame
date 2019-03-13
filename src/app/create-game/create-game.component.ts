import { Component, OnInit } from '@angular/core';
import { Game } from '../Models/Game';
import { CatalogueService } from '../Services/Catalogue/catalogue.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  nom: string;
  categorie: string;
  description: string;
  console: string;

  game: Game;

  constructor(public catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  addGame(nom: HTMLInputElement, categorie: HTMLInputElement, description: HTMLInputElement, console: HTMLInputElement) {

    this.catalogueService.addGame(
        new Game( (nom.value) ? nom.value : 'Nom du Jeu', (categorie.value) ? categorie.value : 'Nouvelle Categrorie',
            description.value, console.value),
    );

    nom.value = '';
    categorie.value = '';
    description.value = '';
    console.value = '';
  }

}
