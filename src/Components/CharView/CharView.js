import React, { Component } from 'react';
import { firestore } from '../../FirebaseConfig';
import { OuterDiv,
         RowDiv,
         PairDiv,
         NameField,
         ContentField } from './CharViewStyled';

class CharView extends Component {
    render = () =>{
        return(
            <OuterDiv>
                <RowDiv>
                    <NameField >Name</NameField>
                </RowDiv>
                <RowDiv>
                    <ContentField>Durgan</ContentField>
                </RowDiv>
                <RowDiv isBottom>
                    <PairDiv>
                        <NameField isPaired>Level</NameField>
                        <ContentField>3</ContentField>
                    </PairDiv>
                    <PairDiv>
                        <NameField isPaired>Race</NameField>
                        <ContentField>Orc</ContentField>
                    </PairDiv>
                    <PairDiv rightmost>
                        <NameField isPaired rightmost>Age</NameField>
                        <ContentField>50</ContentField>
                    </PairDiv>
                </RowDiv>
            </OuterDiv>
        )
    }
}

export default CharView;