import { StripPokemonNumberPipe } from './strip-pokemon-number.pipe';

describe('StripPokemonNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new StripPokemonNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
