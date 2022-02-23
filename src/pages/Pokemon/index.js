import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

import ReturnIcon from '../../assets/images/icons/ireturn.svg';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Vwd2pjdW1sdGdyc2J2ZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMjU5MjAsImV4cCI6MTk1OTkwMTkyMH0.F5IfLLndLFbEEhDXIXTPmSm98-YWfIVBH64SIk4kMUc';
const SUPABASE_URL = 'https://aigepwjcumltgrsbvdwb.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function Pokemon() {

    const params = useParams();
    const pokemonId = params.pokemonId;   
    const [selectedPokemon, setSelectedPokemon]  = useState('');

    const navigate = useNavigate();

    const pokemon = useEffect(() => {
        supabaseClient
        .from('pokemons')
        .select('*')
        .eq('id', pokemonId)
        .then((res) => {
          setSelectedPokemon(res.data[0]);
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

    const loweredTipo1 = slugify(`${selectedPokemon.tipo1}`);
    const loweredTipo2 = slugify(`${selectedPokemon.tipo2}`);
    

    return (
        <div className="pokemon-page-wrapper">
            <div className="pokeDescHeader">
                <button onClick={() => navigate('/')}>
                    <img src={ReturnIcon} alt="Ícone de retorno" />
                </button>
                <div className="pokeInfo">
                    <span>{`#${selectedPokemon.id}`}</span>
                    <span>{selectedPokemon.nome}</span>
                    <div className="pokeTipos">
                    <img src={`./assets/images/tipos/${loweredTipo1}.svg`} alt={`Icone de tipo ${loweredTipo1}`} className={loweredTipo1} />
                    {(selectedPokemon.tipo2 !== null) ? (
                        <img src={`./assets/images/tipos/${loweredTipo2}.svg`} alt={`Icone de tipo ${loweredTipo2}`} className={loweredTipo2} />
                    ) : (
                    <></>
                    )}
                </div>
                </div>
            </div>
            <div className="pokeSprite">
                <img src={`./assets/images/pokemons/${selectedPokemon.id}.gif`} alt={`Imagem de um ${selectedPokemon.nome}`} />
            </div>
            <div className="pokeTiposNomes">
                <span>Tipo(s):&nbsp;</span>
                <span>{selectedPokemon.tipo1}</span>
                {(selectedPokemon.tipo2 !== null) ? (
                    <span> / {selectedPokemon.tipo2}</span>
                ) : (<></>)}
            </div>
            <div className="pokeDescricao">
                <p>{selectedPokemon.descricao}</p>
            </div>
        </div>
    )
}