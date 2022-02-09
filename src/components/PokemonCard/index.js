import Bulbasaur from '../../assets/images/pokemons/bulbasaur.gif';

export default function PokemonCard() {
    return(
        <div className="poke-wrapper">
            <div className="poke-header">
                <span>1</span>
                <span>Bulbasaur</span>
            </div>
            <img src={Bulbasaur} alt="Imagem de um Bulbasaur" />
        </div>
    )
}