import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../Models/Game';
import { CatalogueService } from '../../Services/Catalogue/catalogue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  showPanel = true;
  @Input() game: Game;
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  showPanelTab() {
    this.showPanel = false;
  }
  editGame(nom: HTMLInputElement, categorie: HTMLInputElement, description: HTMLInputElement, console: HTMLInputElement, id: number) {
    const editGame = new Game(nom.value, categorie.value , description.value, console.value);
    editGame.setId(id);
    this.catalogueService.editGame(editGame, id);
  }

}
