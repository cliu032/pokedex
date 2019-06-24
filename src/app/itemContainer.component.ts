import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokemonItemModel } from './pokemon.service';

@Component({
  selector: 'itemContainer',
  templateUrl: './itemContainer.component.html',
  styleUrls: [ './itemContainer.component.css' ]
})
export class itemContainerComponent  {
  @Input() item: PokemonItemModel;

  @Output() outputId = new EventEmitter();

  constructor() {}

  getDetail() {
    this.outputId.emit(this.item.id);
  }
}
