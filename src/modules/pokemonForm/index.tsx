import { useState } from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@tanstack/react-query";
import { FuseResult } from "fuse.js";

import TextField from "@/common/components/FormTextField";
import Button from "@/common/components/Button";
import PokemonDataContainer from "./PokemonDataContainer";
import { Pokemon } from "@/pages/api/search";

interface PokemonFormData {
  trainerName: string;
  trainerAge: number;
  pokemonName: string;
}

const PokemonForm = () => {
  const [pokemonNameInputValue, setPokemonNameInputValue] = useState("");

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
    getValues,
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

  // TODO: handle show submit success modal
  const onSubmit = (data: PokemonFormData) => console.log(data);

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
            // TODO: handle debounce change
            onInputChange={(event, value) => setPokemonNameInputValue(value)}
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
        <PokemonDataContainer />
        <Box display="flex" gap="16px">
          <Button
            buttontype="soft"
            sx={{ marginLeft: "auto" }}
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button buttontype="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default PokemonForm;
