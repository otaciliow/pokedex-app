import {React} from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonCard(props) {
    
    const pokemon = props.pokeName;
    const pokeNum = props.pokeNumero;
    const pokeTipo1 = props.pokeTipo1;
    const pokeTipo2 = props.pokeTipo2;

    // Ajustar navegação!!
    const navigate = useNavigate();

        return(            
        <div className="poke-wrapper">
            <img src={`./assets/images/pokemons/${pokeNum}.gif`} alt={`Imagem de um ${pokemon}`} />
            <div className="pokeInfos">
                <span>{pokemon}</span>
                <div className="pokeTipos">
                    <span>{pokeTipo1}</span>
                    {pokeTipo2 ? (<span>{pokeTipo2}</span>) : (<></>)}
                </div>
            </div>
        </div>
    )
}