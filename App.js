import './App.css';
import{ useState} from "react";
import  Axios, { AxiosError } from 'axios';

function App() {
  const[pokemonName, setPokemonName] = useState("");
  const[pokemonChosen, setPokemonChosen] = useState(false);
  const[pokemon, setPokemon] = useState({
    
    name: "", 
    species: "", 
    img: "", 
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });


  const SearchPokemon = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/charmander' ).then((response) => {
       setPokemon({
         name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
       });
       setPokemonChosen(true);
    }
    );
    };

    




  return (
    <div className="App">
      <div className="Titlesection">
     <h1>Pokemon Profile</h1>
     <input type="text" 
     onChange={(event) => {
       setPokemonName(event.target.value);
     }} 
     />
     <button onClick={SearchPokemon}>Search Pokemon</button>
     </div>
     <div className='DisplaySection'>
       {!pokemonChosen ? (<h1></h1>) : (
         <>
       <h1>{pokemon.name}</h1>
       <img src= {pokemon.img}/>
       <h3>species : {pokemon.species}</h3>
       <h3>Type    : {pokemon.type}</h3>
       <h3>Hp      : {pokemon.hp}</h3>
       <h3>Attack  : {pokemon.attack}</h3>
       <h3>Defense : {pokemon.defense}</h3>
       </>
       )}
     </div>
    </div>
  );
}

export default App;
