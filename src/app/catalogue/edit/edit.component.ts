import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../Models/Game';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  showPanel: false;
  @Input() game: Game;
  constructor() { }

  ngOnInit() {
  }

}
