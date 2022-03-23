import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// supabase import
import { createClient } from '@supabase/supabase-js';

// custom hook import (slugify)
import { useSlugify } from '../../hooks/useSlugify';

import '../../styles/App.css';

import PokemonCard from '../../components/PokemonCard';

// instance supabase connection
const supabaseClient = createClient('https://ykpgsjwcszoiuxcohsub.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcGdzandjc3pvaXV4Y29oc3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNDM5NjIsImV4cCI6MTk2MzYxOTk2Mn0.DfUXaVlUy0AnPFTPGXT5xmXNAc9bT_sWgqBsusq2GYk');

export function Pokedex() {

  const navigate = useNavigate();
  const [currentPokemons, setCurrentPokemons] = useState([]);

  // custom hook (slugify)
  const slugify = useSlugify();

  // render list of pokémons present on the database
  const pokemonList = useEffect(() => {

    document.querySelector('.loading-banner').classList.add('visible');

    // supabase query
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
                  pokeType1={slugify(`${currentPokemons.tipo1}`)}
                  pokeType2={slugify(`${currentPokemons.tipo2}`)}
                />
              </li>
            )
          })}
        </ul>
      </div>
  );
}
