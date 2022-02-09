import './styles/App.css';
import Pokeball from './assets/images/icons/ipokeball.svg';
import PokemonCard from './components/PokemonCard';

export default function App() {
  return (
    <div className="main-wrapper">
      <header>
        <span>Pokédex
          <img src={Pokeball} alt="Icone de pokebola" />
        </span>
      </header>
      <main>
        <ul className="card-wrapper">
          <li>
            <PokemonCard />
          </li>
          <li>
            <PokemonCard />
          </li>
          <li>
            <PokemonCard />
          </li>
          <li>
            <PokemonCard />
          </li>          
        </ul>
      </main>
    </div>
  );
}
