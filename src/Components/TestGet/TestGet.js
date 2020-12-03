import React, { Component } from 'react';
import axios from 'axios';
import { PresentationText } from './TestGetStyled';


class TestGet extends Component {

    state = {
        pokemonName: "",
        pokedexNumber: ""
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/151').then(response => {
            console.log(response);
            this.setState({pokemonName: response.data.species.name, pokedexNumber: response.data.id});
        }).catch(error => {
            console.log(error);
        })
    }

    render = () => {

        return(
            <>
                <PresentationText>Pokémon no registro {this.state.pokedexNumber} é: {this.state.pokemonName}</PresentationText>
            </>
        );

    }

}

export default TestGet;