import type { NextApiRequest, NextApiResponse } from "next";
import Fuse, { FuseResult } from "fuse.js";

import pokemonData from "@/mock-data/pokemon.json";

export type Pokemon = {
  name: string;
  id: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FuseResult<Pokemon>[]>,
) {
  const requestMethod = req.method;
  const pokemonNameFilter = req.query["name"] as string;

  switch (requestMethod) {
    case "GET":
      const options = {
        includeScore: false,
        keys: ["name"],
      };
      const fuse = new Fuse(pokemonData.data, options);
      const filteredPokemons = fuse.search(pokemonNameFilter);

      return res.status(200).json(filteredPokemons);
  }
}
