import { FC } from "react";

import { PokemonDataContainerStyled } from "./styled";

interface Props {
  pokemonImageUrl?: string;
  pokemonName?: string;
  pokemonType?: string[];
  pokemonBaseExperience?: string;
  pokemonId?: string;
}

const PokemonDataContainer: FC<Props> = ({
  pokemonImageUrl,
  pokemonName,
  pokemonType,
  pokemonBaseExperience,
  pokemonId,
}) => {
  const isPokemonFetched =
    !!pokemonImageUrl &&
    !!pokemonName &&
    !!pokemonType &&
    !!pokemonBaseExperience &&
    !!pokemonId;

  return <PokemonDataContainerStyled>Your Pokemon</PokemonDataContainerStyled>;
};

export default PokemonDataContainer;
