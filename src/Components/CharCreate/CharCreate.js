import React, { Component } from 'react';
import { firestore } from '../../FirebaseConfig';
import { FieldHeader,
         CreateDiv,
         NameInput,
         RaceSelect,
         RaceOption,
         ButtonDiv,
         ActionButton } from './CharCreateStyled'

class CharCreate extends Component {

    state ={
        name: '',
        race: 0,
        isLoading: false,
    };

    createChar = () => {
        this.setState({ isLoading: true });
        firestore.collection('chars').add({
            name: this.state.name,
            race: this.state.race,
        })
        .then(() => {
            this.setState({ isLoading: false });
            alert('New char created.');
        })
        .catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        });
    }

    clear = () => {
        this.setState({ name: '' });
        this.setState({ race: 0 });
    }

    render = () => {
        return(
            <CreateDiv>
                <FieldHeader>Enter Your Name</FieldHeader>
                <NameInput type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <FieldHeader>Select Your Race</FieldHeader>
                <RaceSelect value={this.state.race} onChange={(e) => this.setState({ race: e.target.value })}>
                    <RaceOption value="0">...</RaceOption>
                    <RaceOption value="1">Human</RaceOption>
                    <RaceOption value="2">Elf</RaceOption>
                    <RaceOption value="3">Dwarf</RaceOption>
                    <RaceOption value="4">Orc</RaceOption>
                </RaceSelect>
                <ButtonDiv>
                    <ActionButton onClick={this.createChar}>Submit</ActionButton>
                    <ActionButton onClick={this.clear}>Clear</ActionButton>
                    <ActionButton>Return</ActionButton>
                </ButtonDiv>
            </CreateDiv>
        );

    }

}

export default CharCreate;