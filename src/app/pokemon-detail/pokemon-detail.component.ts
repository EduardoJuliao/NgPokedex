import { PokemonStats } from './../../models/pokemon-stat.model';
import { PokemonModel } from 'src/models/pokemon.model';
import { LoadingService } from './../../services/loading.service';
import { PokeService } from './../../services/poke.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private ps: PokeService,
    private ls: LoadingService,
    private snackBar: MatSnackBar
  ) {}

  pokemon: PokemonModel;
  ngOnInit() {}

  orderedStats() : PokemonStats[]{
    return this.pokemon.stats.reverse();
  }

  public load(id: number) {
    this.ls.startLoading();
    this.ps.getPokemon(id).subscribe(
      resp => {
        this.pokemon = resp;
        console.log(this.pokemon);
      },
      error => {
        this.snackBar.open('something wrong happened ', '', {
          duration: 2000
        });
      },
      () => {
        this.ls.stopLoading();
      }
    );
  }
}
