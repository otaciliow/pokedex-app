import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createClient } from '@supabase/supabase-js';

import { useSlugify } from '../../hooks/useSlugify';

import '../../styles/App.css';

import PokemonCard from '../../components/PokemonCard';

const supabaseClient = createClient('https://aigepwjcumltgrsbvdwb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Vwd2pjdW1sdGdyc2J2ZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMjU5MjAsImV4cCI6MTk1OTkwMTkyMH0.F5IfLLndLFbEEhDXIXTPmSm98-YWfIVBH64SIk4kMUc');

export function Pokedex() {

  const navigate = useNavigate();
  const [currentPokemons, setCurrentPokemons] = useState([]);

  const slugify = useSlugify();

  const pokemonList = useEffect(() => {

    document.querySelector('.loading-banner').classList.add('visible');

    supabaseClient
    .from('pokemons')
    .select('*')
    .order('id', {ascending:true})
    .then((res) => {
      setCurrentPokemons(res.data);
      document.querySelector('.loading-banner').classList.remove('visible');
      console.log(pokemonList);
    });
  }, []);

  return (  
      <div>
        <ul className="card-wrapper">
        <div className="loading-banner"></div>
        <h2>Olá! Você encontrará abaixo uma lista com os Pokémons descobertos na região de Kanto! Você pode clicar em seus cards para ver mais informações!</h2>
          {currentPokemons.map((currentPokemons) => {
            return (
              <li key={currentPokemons.id} onClick={() => {navigate(`${currentPokemons.id}`)}}>
                <PokemonCard                   
                  pokeName={currentPokemons.nome} 
                  pokeNumero={currentPokemons.id} 
                  pokeTipo1={slugify(`${currentPokemons.tipo1}`)}
                  pokeTipo2={slugify(`${currentPokemons.tipo2}`)}
                />
              </li>
            )
          })}
        </ul>
      </div>
  );
}
