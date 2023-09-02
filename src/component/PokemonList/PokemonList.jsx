import {useEffect,useState} from "react";
import axios from"axios";
import pPokemon from "../Pokemon/Pokemon"
import './PokemonList.css';


function PokemonList(type){
 const {pokemonListState,setPokemonListState} = usePokemonList (false);
   

 return(
        <div className="pokemon-List-wrapper">
       <div className="pokemon-wrapper">
       {(pokemonListState.isLoading)?'Loading...' : 
       pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}  id={p.id}/>)
    }
    </div>

    
    <div className="controls">
        <button disabled={pokemonListState.prevUrl==null} onClick={()=>{
        const urlToSet = pokemonListState.prevUrl;
        setPokemonListState({...pokemonListState,pokedexUrl:urlToSet})
        }}>prev</button>
        <button disabled={pokemonListState.nextUrl==null} onClick={()=>{
            console.log(pokemonListState);
            const urlToSet = pokemonList.nextUrl;
            setPokemonListState({...pokemonListState,pokedexUrl:urlToSet})
            }}>next</button>
    </div>
    </div>
    )
}
export default PokemonList ;
