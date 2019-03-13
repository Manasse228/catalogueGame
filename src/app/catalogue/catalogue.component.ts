import { Component, OnInit } from '@angular/core';
import { Game } from '../Models/Game';
import { CatalogueService } from '../Services/Catalogue/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  panelOpenState = false;
  catalogue: Game[];

  constructor(public catalogueService: CatalogueService) { }

  ngOnInit() {
    this.catalogue = this.catalogueService.getListCatalogue();
  }

}
