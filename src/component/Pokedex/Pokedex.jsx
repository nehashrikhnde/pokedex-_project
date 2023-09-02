
import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";


// css import
import './Pokedex.css';

function Pokedex(){
    const [searchTerm,setSearchterm] = useState('');
    useEffect(()=>{

    },[searchTerm])
    return(
        <div className="pokedex-wrapper">
        <Search updateSearchTerm ={setSearchterm}/>
        {searchTerm}
     {(!searchTerm)?<PokemonList/>:<pokemonDetails key={searchTerm} pokemonName={searchTerm}/>}



        </div>
    )
}

export default Pokedex;