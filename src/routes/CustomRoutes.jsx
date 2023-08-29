import {Routes,Route} from "react-router-dom";
import PokemonDetails from "../component/PokemonDetails/PokemonDetails";
import Pokedex from "../component/Pokedex/Pokedex";

function CustomRoutes(){
    return(
<Routes>
<Route path = "/"  element={<Pokedex/> }/>
<Route path="/pokemon/:id" element={<PokemonDetails/>} />
</Routes>
    );
}

export default CustomRoutes;
                                                                                     