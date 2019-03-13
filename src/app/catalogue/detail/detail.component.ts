import { Component, OnInit, Input  } from '@angular/core';
import { Game } from '../../Models/Game';
import { CatalogueService } from '../../Services/Catalogue/catalogue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() game: Game;
  constructor(public catalogueService: CatalogueService ) { }

  ngOnInit() {
  }

  deleteGame(game: Game) {
    if (confirm('Are you sure you want to delete this Game from Catalogue ?' )) {
      this.catalogueService.removeGame(game);
    }
  }



}
