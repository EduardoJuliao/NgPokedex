import { PokemonModel } from './../../models/pokemon.model';
import { PokemonDetailComponent } from './../pokemon-detail/pokemon-detail.component';
import { LoadingService } from './../../services/loading.service';
import { PokeService } from './../../services/poke.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StripPokemonNumberPipe } from 'src/pipes/strip-pokemon-number/strip-pokemon-number.pipe';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: PokemonModel[] = [];
  isSelecting: boolean = false;
  private readonly stripper: StripPokemonNumberPipe;

  @Input('pokeDetail') pokeDetail: PokemonDetailComponent;
  @Output('onSelected') onSelected = new EventEmitter();

  constructor(private ps: PokeService, private ls: LoadingService) {
    this.stripper = new StripPokemonNumberPipe();
  }

  ngOnInit() {
    this.getPokemonList(0);

    this.ls.loadingStatus.subscribe(value => {
      this.isSelecting = value;
    });
  }

  selectPokemon(url: string) {
    const id = this.stripper.transform(url);
    this.pokeDetail.load(id);
    this.onSelected.next();
  }

  public onScroll(){
    const lastId = this.pokemonList.map(x => x.id).reduce((a,b) => {
      return Math.max(a, b)
    });
    console.log(lastId);
    this.getPokemonList(lastId)
  }

  private getPokemonList(lastId: number){
    this.ps.getPokemonList(lastId, 1000).subscribe(response => {
      this.pokemonList = this.pokemonList.concat(response.results);
    });
  }
}
