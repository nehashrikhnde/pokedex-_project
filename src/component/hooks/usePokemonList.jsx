import axios from "axios";
import {useState,useEffect} from "react";

function usePokemonList(type) {
    const [pokemonListState,setPokemonListState] = useState({
        pokemonList:[],
            isLoading:true,
            pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
            nextUrl:'',
            prevUrl:'',
          
        
        });

        async function downloadPokemon() {
          
                setPokemonListState((state)=>({ ...state ,isLoading:true}));
               const response = await axios.get(pokemonListState.pokedexUrl); //this download the list of 20 pokemons
                const pokemonResults = response.data.results; //we get the array of pokemon from result
                console.log("response ise",response.data.pokemon); 
                // console.log(setPokemonListState);
            
                    setPokemonListState((state)=>({
                        ...state ,
                        nextUrl:response.data.next, 
                        prevUrl :response.data.previous
                    }));
                

              const pokemonResultPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
                //console.log(pokemonResultPromise);
            
               // passing that promise array to axios.all
                const pokemonData = await axios.all(pokemonResultPromise);// array of 20 pokemon details data
                console.log(pokemonData);
               //now iterate on the each pokemon and extract id,name,image,types
                const pokeListResult = pokemonData.map((pokeData)=>{                                                                                                           
                const pokemon= pokeData.data;
                return {
                    id:pokemon.id,
                    name:pokemon.name,
                    image:(pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny  ,
                    types:pokemon.types
                }
              });
              console.log(pokeListResult);
                setPokemonListState((state)=>({
                    ...state,
                    pokemonList:pokeListResult,
                setIsLoading:false,
                }));
            }
            }
          useEffect(()=>{
            downloadPokemons();
            console.log("List",pokemon.types,pokemon.types,pokemonListState);
          },[pokemonListState,pokedexUrl]) ;
          
          return {pokemonListState,setPokemonListState}


          
    }









export default usePokemonList;