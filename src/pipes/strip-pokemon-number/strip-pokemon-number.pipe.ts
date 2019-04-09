import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripPokemonNumber'
})
export class StripPokemonNumberPipe implements PipeTransform {

  transform(value: string): number {
    var m = value.match(/\/pokemon\/(\d+)\//);
    return parseInt(m[1]);
  }
}
