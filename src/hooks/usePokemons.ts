import { useEffect, useState } from 'react'
import { IPokemon } from '../interfaces/interfaces'
import axios from 'axios'

export const usePokemon = (url?: string, id?:string) => {
    const [pokemon, setPokemon ] = useState<null | undefined | IPokemon>();

    const fetchPokemon = async () => {
        if(url) {
            const { data }:any = await axios.get(url);          //ELIMINAR ANY!!
            setPokemon(data);
        }else if(id){
            const { data }:any = await axios.get(               //ELIMINAR ANY
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            setPokemon(data);  
        }
    };

    useEffect(() => {
        fetchPokemon()
    }, [])
    
    return{
        pokemon
    }
}