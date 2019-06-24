import { Component, OnInit } from '@angular/core';

import { 
  PokemonService, PokemonListModel, PokemonListResultItemModel, PokemonItemModel 
  } from './pokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  name = 'Pokemon index';
  pokemonResultItemList: PokemonListResultItemModel[];
  pokemonItemList: PokemonItemModel[] = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  detailMode = false;
  pokemonDetail: PokemonItemModel;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getPokemonItemList(this.baseUrl);
  }

  getPokemonItemList = (url: string) => {
    this.pokemonService.getPokemonList(url)
      .subscribe(s => {
        let count = s.results.length;
        s.results.forEach(item => this.pokemonService.getPokemonItem(item.url)
          .subscribe(r => {
            this.pokemonItemList.push(r);
            count--;
            if (count === 0) {
              this.pokemonItemList.sort((a, b) => (a.id - b.id));
            }
          })
        );
        if (s.next !== null) {
          this.getPokemonItemList(s.next);
        }
      });
  }

  showDetail = (id: number) => {
    this.detailMode = true;
    this.pokemonDetail = this.pokemonItemList.find(f => f.id === id);
    console.log(this.detailMode);
    console.log(id);
  }

  hideDetail = () => {
    this.detailMode = false;
  }

}
