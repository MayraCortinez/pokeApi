import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  AllPokemonsResult,
  PokemonsByTypeResult,
  PokeType,
} from "../interfaces/types";

interface ContextProps {
  types: PokeType[];
  filterSelected: PokeType;
  pokemonsFiltered: string[] | null;
  changeTypeSelected: (type: PokeType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  const allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const defaultState: PokeType = {
    name: "All",
    url: allPokemonsUrl,
  };

  const [allPokemons, setAllPokemons] = useState<string[] | null>(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<string[] | null>(null);

  const [types, setTypes] = useState<PokeType[]>([defaultState]);
  const [filterSelected, setFilterSelected] = useState<PokeType>(defaultState);

  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type);

    const { data } = await axios.get(type.url!);
    const pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
    );

    type.name !== "All"
      ? setPokemonsFiltered(pokemons)
      : setPokemonsFiltered(allPokemons);
  };

  const getPokemonsType = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    setTypes((prevTypes) => [...prevTypes, ...data.results]);
  };

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl);

    const pokemons = data?.results?.map(
      (pokemon: AllPokemonsResult) => pokemon?.url
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getPokemonsType();
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        pokemonsFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
