import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BackgroundsByTypes";
import { Loader } from "../Loader";
import { BaseStats } from './Components/BaseStats';
import { Header } from './Components/Header';
import { PokeTypes } from "./Components/PokeTypes";
import { Stats } from './Components/Stats';
import { Title }  from './Components/Title';

import styles from './styles.module.scss'

interface Props {
  pokemon: IPokemon |  null;
}

export const PokemonDetail = ({ pokemon}: Props) => {

  /*@ts-ignore*/
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  if(!pokemon){
    return 
      <div style={{background: backgroundSelected}}>
        <Loader size={50} color="fff" />
      </div>
  }

  return (
    <div style={{background: backgroundSelected}} className={styles.bg}>
      <Header pokemon={pokemon}/>
      <div className={styles.info}>
        <img 
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          } 
          alt={pokemon.name} />
          <PokeTypes pokemon={pokemon} />
          <Title content="About" backgroundSelected={backgroundSelected} />
          <Stats pokemon={pokemon} />
          <Title content="Base Stats" backgroundSelected={backgroundSelected} />
          <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  )

}
