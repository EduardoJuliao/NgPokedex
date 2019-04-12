import { LoadingService } from './../services/loading.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { PokeService } from 'src/services/poke.service';
import { MaterialModule } from 'src/modules/material.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { UpperCasePipe } from '../pipes/upper-case/upper-case.pipe';
import { StripPokemonNumberPipe } from '../pipes/strip-pokemon-number/strip-pokemon-number.pipe';
import { FirstUpperCasePipe } from '../pipes/first-upper-case/first-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    UpperCasePipe,
    StripPokemonNumberPipe,
    FirstUpperCasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [PokeService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
