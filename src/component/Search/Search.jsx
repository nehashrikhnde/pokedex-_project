import './Search.css'

function Search({updateSerachTerm}) {
const debounceCallback = useDebounce((e)=>updateSearchTerm(e.target.value))
    
    return(
<div className="search-wrapper">
     <input
      id="pokemon-name-search"
       type="text"
       placeholder="pokemon name...."
       onChange={(e)=>debounceCallback(e,'123')}
     
     
     />

</div>
    );
}
export default Search;