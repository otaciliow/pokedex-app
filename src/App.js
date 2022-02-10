import { React } from 'react';
import './styles/App.css';
import Pokeball from './assets/images/icons/ipokeball.svg';
import PokemonCard from './components/PokemonCard';

export default function App() {

  // usar roteamento para direcionar para uma página SPA contendo o pokémon que foi clicado (useNavigate) em cada tag li
  // se basear no app de chat da Alura (The Tavern)

  const pokemonList = [
    {id: 1, nome: 'Bulbasaur', tipo1: 'Grama', tipo2: 'Venenoso'},
    {id: 2, nome: 'Squirtle', tipo1: 'Água', tipo2: ''},
    {id: 3, nome: 'Charmander', tipo1: 'Fogo', tipo2: ''}
    ];

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
              <li>
                <PokemonCard 
                  key={pokemonList.id} 
                  pokeName={pokemonList.nome} 
                  pokeNumero={pokemonList.id} 
                  pokeTipo1={pokemonList.tipo1} 
                  pokeTipo2={pokemonList.tipo2} 
                />
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}
