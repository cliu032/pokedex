import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokemonItemModel } from './pokemon.service';

@Component({
  selector: 'itemList',
  templateUrl: './itemList.component.html',
  styleUrls: [ './itemList.component.css' ]
})
export class itemListComponent {
  @Input() items: PokemonItemModel[];

  @Output() outputId = new EventEmitter();

  constructor() {}

  showDetail(id: number) {
    this.outputId.emit(id);
  }
}
