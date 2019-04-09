import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokeService {
  private baseUrl: string;
  public readonly limit: number = 20;

  constructor(private client: HttpClient, @Inject('API_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getPokemon(entry: number): Observable<any> {
    return this.client.get(`${this.baseUrl}pokemon/${entry}`);
  }

  public getPokemonList(offset: number, limit?: number): Observable<any> {
    let url = `${this.baseUrl}pokemon/?limit=${limit ||
      this.limit}&offset=${offset}`;

    return this.client.get<any>(url);
  }
}
