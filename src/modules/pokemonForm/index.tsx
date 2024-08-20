import { useState, useMemo, SyntheticEvent } from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { FuseResult } from "fuse.js";
import { debounce } from "@mui/material/utils";

import TextField from "@/common/components/FormTextField";
import Button from "@/common/components/Button";
import PokemonDataContainer from "./PokemonDataContainer";
import { Pokemon } from "@/pages/api/search";
import { SinglePokemonType } from "./PokemonDataContainer";
import SuccessModal from "./SuccessModal";

interface PokemonFormData {
  trainerName: string;
  trainerAge: number;
  pokemonName: string;
}

interface PokemonApiData {
  types: SinglePokemonType[];
  id: number;
  base_experience: number;
}

const PokemonForm = () => {
  const [pokemonNameInputValue, setPokemonNameInputValue] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState<{
    name: string;
    id: number;
  }>();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validationSchema = yup
    .object({
      trainerName: yup.string().min(2).max(20).required(),
      trainerAge: yup.number().min(16).max(99).nullable().required(),
      pokemonName: yup.string().required(),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      trainerName: "",
      trainerAge: undefined,
      pokemonName: "",
    },
  });

  const { data: pokemonsData, isLoading: isPokemonsDataLoading } = useQuery({
    queryKey: ["pokemonsData", pokemonNameInputValue],
    queryFn: async (): Promise<Array<FuseResult<Pokemon>[]>> => {
      const response = await fetch(`api/search?name=${pokemonNameInputValue}`);
      return await response.json();
    },
  });

  const { data: chosenPokemonData, isLoading: isChosenPokemonDataLoading } =
    useQuery({
      queryKey: ["pokemonData", chosenPokemon],
      enabled: typeof chosenPokemon === "object",
      queryFn: async (): Promise<PokemonApiData> => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${chosenPokemon!.name}`,
        );
        return await response.json();
      },
    });

  const onSubmit = (data: PokemonFormData) => {
    setIsSuccessModalOpen(true);
  };

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    setPokemonNameInputValue(value);
  };

  const debouncedHandleInputChange = useMemo(
    () =>
      debounce((event: SyntheticEvent, value: string) => {
        handleInputChange(event, value);
      }, 400),
    [handleInputChange],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" gap="24px" flexDirection="column">
        <Box display="flex" gap="24px" justifyContent="space-between">
          <TextField
            label="Trainer's name"
            placeholder="Trainer's name"
            {...register("trainerName")}
            error={!!errors.trainerName}
            helperText={errors.trainerName && "Required from 2 to 20 symbols"}
          />
          <TextField
            label="Trainer's age"
            placeholder="Trainer's age"
            {...register("trainerAge")}
            error={!!errors.trainerAge}
            helperText={errors.trainerAge && "Required range from 16-99"}
          />
        </Box>
        <Box>
          <Autocomplete
            {...register("pokemonName")}
            options={pokemonsData || []}
            loading={isPokemonsDataLoading}
            //@ts-ignore
            getOptionLabel={(option) => option.item.name}
            onInputChange={(event, value) => {
              debouncedHandleInputChange(event, value);
            }}
            onChange={(event: SyntheticEvent, value) => {
              //@ts-ignore
              setChosenPokemon(value ? value.item : null);
              //@ts-ignore
              setValue("pokemonName", value ? value.item.name : null);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pokemon name"
                error={!!errors.pokemonName}
                helperText={errors.pokemonName && "Choose something"}
              />
            )}
          />
        </Box>
        <PokemonDataContainer
          pokemonImageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${chosenPokemon?.id}.png`}
          pokemonName={chosenPokemon?.name}
          pokemonType={chosenPokemonData?.types}
          pokemonBaseExperience={chosenPokemonData?.base_experience}
          pokemonId={chosenPokemonData?.id}
        />
        <Box display="flex" gap="16px">
          <Button
            buttontype="soft"
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              reset();
              setChosenPokemon(undefined);
            }}
          >
            Reset
          </Button>
          <Button buttontype="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
      <SuccessModal
        isModalOpen={isSuccessModalOpen}
        setIsModalOpen={setIsSuccessModalOpen}
        resetForm={reset}
        setChosenPokemon={setChosenPokemon}
      />
    </form>
  );
};

export default PokemonForm;
