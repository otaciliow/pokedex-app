import {React} from 'react';

export default function PokemonCard(props) {
    
    const pokemon = props.pokeName;
    const pokeNum = props.pokeNumero;
    const pokeTipo1 = props.pokeTipo1;
    const pokeTipo2 = props.pokeTipo2;

        return(            
        <div className={`poke-wrapper ${pokeTipo1}`}>
            <img src={`./assets/images/pokemons/${pokeNum}.gif`} alt={`Imagem de um ${pokemon}`} />
            <div className="pokeInfos">
                <span>{pokemon}</span>
                <div className="pokeTipos">
                    <img src={`./assets/images/tipos/${pokeTipo1}.svg`} alt={`Icone de tipo ${pokeTipo1}`} className={pokeTipo1} />
                    {(pokeTipo2 !== 'null') ? (
                        <img src={`./assets/images/tipos/${pokeTipo2}.svg`} alt={`Icone de tipo ${pokeTipo2}`} className={pokeTipo2} />
                    ) : (
                    <></>
                    )}
                    <span className="poke-num-fixed">{`# ${pokeNum}`}</span>
                    <div className="pokeball-bg"></div>
                </div>
            </div>
        </div>
    )
}