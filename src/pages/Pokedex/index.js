import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { supabaseClient } from '../../supabaseClient';
import { createClient } from '@supabase/supabase-js';
import '../../styles/App.css';
import PokemonCard from '../../components/PokemonCard';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Vwd2pjdW1sdGdyc2J2ZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMjU5MjAsImV4cCI6MTk1OTkwMTkyMH0.F5IfLLndLFbEEhDXIXTPmSm98-YWfIVBH64SIk4kMUc';
const SUPABASE_URL = 'https://aigepwjcumltgrsbvdwb.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function Pokedex() {

  const navigate = useNavigate();
  const [currentPokemons, setCurrentPokemons] = useState([]);  

  const pokemonList = useEffect(() => {
    supabaseClient
    .from('pokemons')
    .select('*')
    .order('id', {ascending:true})
    .then((res) => {
      setCurrentPokemons(res.data);
    });
  }, []);

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
      <div>
        <ul className="card-wrapper">
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
