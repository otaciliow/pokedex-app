import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// supabase import
import { createClient } from '@supabase/supabase-js';

// Custom hook (Slugify)
import { useSlugify } from '../../hooks/useSlugify';

import ReturnIcon from '../../assets/images/icons/ireturn.svg';

// instance supabase connection
const supabaseClient = createClient('https://ykpgsjwcszoiuxcohsub.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcGdzandjc3pvaXV4Y29oc3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNDM5NjIsImV4cCI6MTk2MzYxOTk2Mn0.DfUXaVlUy0AnPFTPGXT5xmXNAc9bT_sWgqBsusq2GYk');

export function Pokemon() {

    // get the parameters passed in the URL
    const params = useParams();
    const pokemonId = params.pokemonId; 

    // custom hook (slugify)
    const slugify = useSlugify();  
    const [selectedPokemon, setSelectedPokemon]  = useState('');

    const navigate = useNavigate();

    // render current pokémon on page load based on the parameters passed
    const pokemon = useEffect(() => {

        document.querySelector('.loading-banner').classList.add('visible');

        // supabase query
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

    // custom hook usage
    const loweredType1 = slugify(`${selectedPokemon.tipo1}`);
    const loweredType2 = slugify(`${selectedPokemon.tipo2}`);
    
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
                    <div className="pokeTypes">
                    <img src={`./assets/images/tipos/${loweredType1}.svg`} alt={`Icone de tipo ${loweredType1}`} className={loweredType1} />
                    {(selectedPokemon.tipo2 !== null) ? (
                        <img src={`./assets/images/tipos/${loweredType2}.svg`} alt={`Icone de tipo ${loweredType2}`} className={loweredType2} />
                    ) : (
                    <></>
                    )}
                </div>
                </div>
            </div>
            <div className="pokeSprite">
                <img src={`./assets/images/pokemons/${selectedPokemon.id}.gif`} alt={`Imagem de um ${selectedPokemon.nome}`} />
            </div>
            <div className="pokeTypesNames">
                <span>Tipo(s):&nbsp;</span>
                <span>{selectedPokemon.tipo1}</span>
                {(selectedPokemon.tipo2 !== null) ? (
                    <span> / {selectedPokemon.tipo2}</span>
                ) : (<></>)}
            </div>
            <div className="pokeDescription">
                <p>{selectedPokemon.descricao}</p>
            </div>
        </div>
    )
}