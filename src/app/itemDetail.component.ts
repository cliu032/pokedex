import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokemonItemModel } from './pokemon.service';

@Component({
  selector: 'itemDetail',
  templateUrl: './itemDetail.component.html',
  styleUrls: [ './itemDetail.component.css' ]
})
export class itemDetailComponent {
  @Input() item: PokemonItemModel;

  @Output() hideDetail = new EventEmitter();

  constructor() {}

  getBack() {
    this.hideDetail.emit();
  }
}
