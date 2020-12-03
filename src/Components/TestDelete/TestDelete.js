import React, { Component } from 'react';
import axios from 'axios';
import { OverDiv,
         IdInput,
         FieldName,
         ConfirmButton } from './TestDeleteStyled';

class TestDelete extends Component {

    state = {
        deleteId: ''
    }

    delete = () => {

        const shouldDelete = window.confirm(`Deseja realmente excluir o registro ${this.state.deleteId}?`);
        const PATH = `https://5d716862d3448a001411b7c9.mockapi.io/api/v1/book/${this.state.deleteId}`;
        
        if (shouldDelete){
            axios.delete(PATH);
        }

    }
    

    render = () => {
        return(
            <OverDiv>
                <FieldName>Inform ID of the registry you wish to delete:</FieldName>
                <IdInput value={this.state.deleteId} onChange={event => this.setState({deleteId: event.target.value})}/>
                <ConfirmButton onClick={this.delete}>Confirm</ConfirmButton>
            </OverDiv>
        );
    }

}

export default TestDelete;