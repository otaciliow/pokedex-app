import { React } from 'react';
import './styles/App.css';
import Pokeball from './assets/images/icons/ipokeball.svg';
import PokemonCard from './components/PokemonCard';

export default function App() {

  // usar roteamento para direcionar para uma página SPA contendo o pokémon que foi clicado (useNavigate) em cada tag li
  // se basear no app de chat da Alura (The Tavern)

  const pokemonList = [
    {id: 1, nome: 'Bulbasaur', tipo1: 'Grama', tipo2: 'Venenoso'},
    {id: 2, nome: 'Ivysaur', tipo1: 'Grama', tipo2: 'Venenoso'},
    {id: 3, nome: 'Venusaur', tipo1: 'Grama', tipo2: 'Venenoso'},
    {id: 7, nome: 'Squirtle', tipo1: 'Água', tipo2: ''},
    {id: 8, nome: 'Wartortle', tipo1: 'Água', tipo2: ''},
    {id: 9, nome: 'Blastoise', tipo1: 'Água', tipo2: ''},
    {id: 4, nome: 'Charmander', tipo1: 'Fogo', tipo2: ''},
    {id: 5, nome: 'Charmeleon', tipo1: 'Fogo', tipo2: ''},
    {id: 6, nome: 'Charizard', tipo1: 'Fogo', tipo2: 'Voador'}
    ];

    const accentsMap = new Map([
      ["-", "\\s|\\.|_"],
      ["a", "á|à|ã|â|ä"],
      ["e", "é|è|ê|ë"],
      ["i", "í|ì|î|ï"],
      ["o", "ó|ò|ô|õ|ö"],
      ["u", "ú|ù|û|ü"],
      ["c", "ç"],
      ["n", "ñ"]
    ]);
    
  const reducer = (acc, [key]) => acc.replace(new RegExp(accentsMap.get(key), "gi"), key);
    
  const slugify = (text) => [...accentsMap].reduce(reducer, text.toLowerCase());

  return (
    <div className="main-wrapper">
      <header>
        <span>Pokédex
          <img src={Pokeball} alt="Icone de pokebola" />
        </span>
      </header>
      <main>
        <ul className="card-wrapper">
          {pokemonList.map((pokemonList) => {
            return (
              <li key={pokemonList.id} className={slugify(pokemonList.tipo1)}>
                <PokemonCard                   
                  pokeName={pokemonList.nome} 
                  pokeNumero={pokemonList.id} 
                  pokeTipo1={slugify(pokemonList.tipo1)} 
                  pokeTipo2={slugify(pokemonList.tipo2)} 
                />
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}
