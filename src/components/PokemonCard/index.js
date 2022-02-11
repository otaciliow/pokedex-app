import {React} from 'react';
// import { useNavigate } from 'react-router-dom';

export default function PokemonCard(props) {
    
    const pokemon = props.pokeName;
    const pokeNum = props.pokeNumero;
    const pokeTipo1 = props.pokeTipo1;
    const pokeTipo2 = props.pokeTipo2;

    // Ajustar navegação!!
    // const navigate = useNavigate();

        return(            
        <div className={`poke-wrapper ${pokeTipo1}`}>
            <img src={`./assets/images/pokemons/${pokeNum}.gif`} alt={`Imagem de um ${pokemon}`} />
            <div className="pokeInfos">
                <span>{pokemon}</span>
                <div className="pokeTipos">
                    <img src={`./assets/images/tipos/${pokeTipo1}.svg`} alt={`Icone de tipo ${pokeTipo1}`} className={pokeTipo1} />
                    {pokeTipo2 ? (
                        <img src={`./assets/images/tipos/${pokeTipo2}.svg`} alt={`Icone de tipo ${pokeTipo2}`} className={pokeTipo2} />
                    ) : (
                    <></>
                    )}
                </div>
            </div>
        </div>
    )
}