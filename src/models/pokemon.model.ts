import { PokemonStats } from './pokemon-stat.model';
import { PokemonType } from './pokemon-type.model';
import { PokemonSprite } from './pokemon-sprite.model';

export interface PokemonModel {
   name: string;
   id: number;
   types: PokemonType[],
   sprites: PokemonSprite;
   stats: PokemonStats[];
}
