import React, { Component } from 'react';
import { firestore } from '../../FirebaseConfig';
import { ViewDiv,
         ViewRow,
         RowDiv,
         FieldName,
         FieldCharName,
         FieldCharRace,
         AllButton } from './CharListStyled';

class CharList extends Component {
    
    state = {
        chars: [],
        isLoading: false,
    }

    races = {
        '1': 'Human',
        '2': 'Elf',
        '3': 'Dwarf',
        '4': 'Orc',
    }

    componentDidMount = () => {
        this.setState({ isLoading: true });
        firestore.collection('chars').get()
        .then(res => {
            const tempChars = [];
            res.docs.forEach(doc => tempChars.push({
                id: doc.id,
                ...doc.data(),
            }));
            this.setState({ chars: tempChars });
            this.setState({ isLoading: false });
        })
        .catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        });
    }

    mountList = () => {
        const list = [];
        this.state.chars.reverse().forEach((char, i) => {
            list.push(
                <ViewRow key={i}>
                    <RowDiv>
                        <FieldName>Name</FieldName>
                    </RowDiv>
                    <RowDiv>
                        <FieldCharName>{char.name}</FieldCharName>
                    </RowDiv>
                    <RowDiv>
                        <FieldName>Race</FieldName>
                    </RowDiv>
                    <RowDiv>
                        <FieldCharRace>{this.races[char.race]}</FieldCharRace>
                    </RowDiv>
                    <RowDiv rightmost="true">
                        <AllButton>View All</AllButton>
                        <AllButton>Edit</AllButton>
                        <AllButton>Delete</AllButton>
                    </RowDiv>
                </ViewRow>
            );
        });
        return list;
    }

    render = () => {
        return(
            <ViewDiv>
                {this.state.isLoading ? 'Loading...' : this.mountList()}
            </ViewDiv>
        );
    }
}

export default CharList;