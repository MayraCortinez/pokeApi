import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../components/PokemonDetail";
import { usePokemon } from "../../hooks/usePokemons";

export const PokeDetail = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

   /*@ts-ignore*/
  return <PokemonDetail pokemon={pokemon!} />;
};