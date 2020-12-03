import styled from 'styled-components';

export const CreateDiv = styled.div`
    margin-left: 150px;
    margin-right: 150px;
    display: flex;
    flex-direction: column;
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 60px;
`

export const FieldHeader = styled.h1`
    font-size: 50px;
    border-bottom: 3px solid black;
`

export const NameInput = styled.input`
    height: 60px;
    font-size: 30px;
    padding-left: 15px;
    margin-bottom: 20px;
`

export const RaceSelect = styled.select`
    height: 60px;
    font-size: 30px;
    padding-left: 15px;
    margin-bottom: 20px;
`
export const RaceOption = styled.option`    
    font-size: 20px;
`
export const ActionButton = styled.button`
    height: 80px;
    width: 210px;
    font-size: 60px;
    border: none;
    background-color: grey;
    border: 2px solid white;

    &:hover{
        background-color: lightgray;
        border: 2px solid black;
    }
`