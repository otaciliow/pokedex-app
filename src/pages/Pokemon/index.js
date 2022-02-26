import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { createClient } from '@supabase/supabase-js';

import { useNavigate } from 'react-router-dom';

import { useSlugify } from '../../hooks/useSlugify';

import ReturnIcon from '../../assets/images/icons/ireturn.svg';

const supabaseClient = createClient('https://aigepwjcumltgrsbvdwb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Vwd2pjdW1sdGdyc2J2ZHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMjU5MjAsImV4cCI6MTk1OTkwMTkyMH0.F5IfLLndLFbEEhDXIXTPmSm98-YWfIVBH64SIk4kMUc');

export function Pokemon() {

    const params = useParams();
    const pokemonId = params.pokemonId; 

    const slugify = useSlugify();  
    const [selectedPokemon, setSelectedPokemon]  = useState('');

    const navigate = useNavigate();

    const pokemon = useEffect(() => {

        document.querySelector('.loading-banner').classList.add('visible');

        supabaseClient
        .from('pokemons')
        .select('*')
        .eq('id', pokemonId)
        .then((res) => {
          setSelectedPokemon(res.data[0]);
          document.querySelector('.loading-banner').classList.remove('visible');
          console.log(pokemon)
        });
      }, [pokemonId]);    

    const loweredTipo1 = slugify(`${selectedPokemon.tipo1}`);
    const loweredTipo2 = slugify(`${selectedPokemon.tipo2}`);
    
    return (
        <div className="pokemon-page-wrapper">
            <div className="loading-banner"></div>
            <div className="pokeDescHeader">
                <button onClick={() => navigate('/')}>
                    <img src={ReturnIcon} alt="Ícone de retorno" />
                </button>
                <div className="pokeInfo">
                    <span>{`# ${selectedPokemon.id}`}</span>
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