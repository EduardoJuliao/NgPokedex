import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { LoadingService } from './../services/loading.service';
import { Component, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSomethingLoading: boolean = false;
  screenWidth: number;

  @ViewChild(PokemonListComponent) pokemonList: PokemonListComponent;

  constructor(private ls: LoadingService) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
    this.ls.loadingStatus.subscribe(value => {
      this.isSomethingLoading = value;
    });
  }

  ngOnDestroy(){
    this.ls.loadingStatus.unsubscribe();
  }

  onScroll(){
    console.log('scrolled in app')
    this.pokemonList.onScroll();
  }
}
