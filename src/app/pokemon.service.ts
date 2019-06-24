import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient) { }

  getPokemonList(url: string): Observable<PokemonListModel> {
    return url !== null ? this.http.get<PokemonListModel>(url) : null;
  }

  getPokemonItem(url: string): Observable<PokemonItemModel> {
    return this.http.get<PokemonItemModel>(url);
  }
}

export interface PokemonListModel {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResultItemModel[];
}

export interface PokemonListResultItemModel {
  name: string;
  url: string;
}

export interface PokemonItemModel {
  name: string;
  id: number;
  sprites: {
    back_default: string;
    front_default: string;
  };
}