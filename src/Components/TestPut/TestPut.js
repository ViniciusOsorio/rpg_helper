import React, { Component } from 'react';
import { FieldName,
         InfoInput,
         StatusSelect,
         SubmitButton,
         OuterDiv } from './TestPutStyled';
import axios from 'axios';

class TestPut extends Component {

    state = {
        title: '',
        author: '',
        cover: '',
        status: ''
    }

    submit =  () => {
        const PATH = 'https://5d716862d3448a001411b7c9.mockapi.io/api/v1/book/14';
        const moddedBook = {
            title: this.state.title,
            author: this.state.author,
            cover: this.state.cover,
            status: this.state.status
        }
        axios.put(PATH, moddedBook)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    }

    render = () => {
        return(
            <OuterDiv>
                <FieldName>Title</FieldName>
                <InfoInput value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
                <FieldName>Author</FieldName>
                <InfoInput value={this.state.author} onChange={event => this.setState({author: event.target.value})}/>
                <FieldName>Cover URL</FieldName>
                <InfoInput value={this.state.cover} onChange={event => this.setState({cover: event.target.value})}/>
                <FieldName>Status</FieldName>
                <StatusSelect value={this.state.status} onChange={event => this.setState({status: event.target.value})}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </StatusSelect>
                <SubmitButton onClick={this.submit}>SUBMIT</SubmitButton>
            </OuterDiv>
        );
    }

}

export default TestPut;