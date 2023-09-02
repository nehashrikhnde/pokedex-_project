import axios from "axios";
import { useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id,pokemonName){
    const [pokemon,setPokemon] = useState({});
    const [isLoading,setisLoading] = useState(true)
    let pokemonListHookState =[];
    async function downloadPokemon(){
        try {
            let response;
        if(pokemonName){
         response = await axios .get('https://pokeapi.co/api/v2/pokemon/${id}');
        }else{
            response = await axios.get('http://pokeapi.co/api/v2/pokemon/${id}');
        }
        const pokemonOfSameTypes = await axios.get('https://pokeapi.co/api/v2/type/${response.data.types?response.daa.types[0].type.name:''}')


        setPokemon({
        ...state,
            name:response.data.name,
            image:response.data.sprities.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name)
            similarPokemons:pokemonOfSameTypes.data.pokemon
        });
       pokemonOfSameTypes.then((response)=>{
setPokemon(state=>({
    ...state
 similarPokemons:pokemonOfSameTypes.data.pokemon
}))
       })
        setPokemonListState({...pokemonListState,type:response.data.types ? response.data.types[0].type.name:''})
    
   
        } catch (error) {
            
        }
         }
   const [pokemonListState,setPokemonListState] = useState({});

        useEffect(()=>{
            try {
                downloadPokemon();
            } catch (error) {
                console.log("somthing went wrong");
            }
            
            console.log("list",pokemon.types,pokemonListState);
        },[])
    return[pokemon]
}

export default usePokemonDetails;