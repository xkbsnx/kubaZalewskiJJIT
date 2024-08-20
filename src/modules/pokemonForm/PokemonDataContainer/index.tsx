import { FC } from "react";
import Image from "next/image";
import { Typography, Box } from "@mui/material";

import {
  PokemonDataContainerStyled,
  PokemonInfoContainer,
  PokemonTypeBullet,
} from "./styled";

export interface SinglePokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Props {
  pokemonImageUrl?: string;
  pokemonName?: string;
  pokemonType?: SinglePokemonType[];
  pokemonBaseExperience?: number;
  pokemonId?: number;
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

  const renderPokemonTypes = () => {
    return (
      <Box display="flex" gap="8px" flexWrap="wrap">
        Type:
        {pokemonType?.map((type) => (
          <PokemonTypeBullet>
            <Typography fontSize="12px">{type.type.name}</Typography>
          </PokemonTypeBullet>
        ))}
      </Box>
    );
  };

  return (
    <PokemonDataContainerStyled>
      {isPokemonFetched ? (
        <>
          <Image
            src={pokemonImageUrl}
            alt="pokemon image"
            width={98}
            height={104}
          />
          <PokemonInfoContainer>
            <Typography>Name: {pokemonName}</Typography>
            <Typography>{renderPokemonTypes()}</Typography>
            <Typography>Base experience: {pokemonBaseExperience}</Typography>
            <Typography>Id: {pokemonId}</Typography>
          </PokemonInfoContainer>
        </>
      ) : (
        "Your Pokemon"
      )}
    </PokemonDataContainerStyled>
  );
};

export default PokemonDataContainer;
