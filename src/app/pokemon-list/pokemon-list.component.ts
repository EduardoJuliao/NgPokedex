import { PokemonDetailComponent } from './../pokemon-detail/pokemon-detail.component';
import { LoadingService } from './../../services/loading.service';
import { PokeService } from './../../services/poke.service';
import { Component, OnInit, Input } from '@angular/core';
import { StripPokemonNumberPipe } from 'src/pipes/strip-pokemon-number/strip-pokemon-number.pipe';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  isSelecting: boolean = false;
  private readonly stripper: StripPokemonNumberPipe;

  @Input('pokeDetail') pokeDetail: PokemonDetailComponent;

  constructor(private ps: PokeService, private ls: LoadingService) {
    this.stripper = new StripPokemonNumberPipe();
  }

  ngOnInit() {
    this.ps.getPokemonList(0).subscribe(response => {
      this.pokemonList = this.pokemonList.concat(response.results);
      console.log(this.pokemonList);
    });

    this.ls.loadingStatus.subscribe(value => {
      this.isSelecting = value;
    });
  }

  selectPokemon(url: string) {
    const id = this.stripper.transform(url);
    this.pokeDetail.load(id);
  }
}
