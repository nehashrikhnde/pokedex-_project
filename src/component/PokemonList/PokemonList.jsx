import {useEffect,useState} from "react";
import axios from"axios";
import './PokemonList.css';


function pokemonList(){

    const [PokemonList,setPokemonList]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const [pokedexurl,setpokedexurl] = useState('http://pokeapi.co/api/v2/pokemon');

    const [nextUrl,setNextUrl]=useState('');
    const [prevUrl,setPrevUrl]=useState('');

    const [pokemonListState,setPokemonListState] =useState({
        pokemonList:[],
        isLoading:true,
        pokedexUrl:'http://pokeapi.co/api/v2/pokemon',
    
    })

async function downloadPokemons() {
    
    const response = await axios.get(pokedexurl); //this download the list of 20 pokemons
    const pokemonResults = response.data.results; //we get the array of pokemon from result
    console.log(response.data); 
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    // iterating over the array of pokemn and using their url,to create an array of promises
    //that will download those 20 pokemon
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
    setPokemonList(pokeListResult);
    setIsLoading(false);
};
useEffect(()=>{
        downloadPokemons();
 },[pokedexurl]);

 return(
        <div className="pokemon-List-wrapper">
       <div>Pokemon List</div>
       <div className="pokemon-wrapper">
       {(isLoading)?'Loading...' : 
       pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}  id={p.id}/>)
    }
    </div>

    
    <div className="controls">
        <button disabled={prevUrl==null} onClick={()=>setpokedexurl(prevUrl)}>prev</button>
        <button disabled={nextUrl==null} onClick={()=>setpokedexurl(nextUrl)}>next</button>
    </div>
    </div>
    )
}
export default pokemonList ;
