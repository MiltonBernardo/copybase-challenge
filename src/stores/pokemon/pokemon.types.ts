interface PokemonEvolutions {
  name: string;
}

export interface PokemonProps {
  name: string;
  experience: number;
  height: number;
  weight: number;
  evolutions: PokemonEvolutions[];
}
