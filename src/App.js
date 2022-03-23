import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Pages imports
import { Pokedex } from './pages/Pokedex';
import { Pokemon } from './pages/Pokemon';

// Pokeball icon
import Pokeball from './assets/images/icons/ipokeball.svg';

export default function App() {

  return (
    <Router>
      <div className="main-wrapper">
      <header>
        <span>Pokédex
          <img src={Pokeball} alt="Icone de pokebola" />
        </span>
      </header>   
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/:pokemonId' element={<Pokemon />} />
      </Routes>
      </div>
    </Router>
  );
}
