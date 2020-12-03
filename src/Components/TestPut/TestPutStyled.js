import styled from 'styled-components';

export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 400px;
    margin-left: 200px;
`

export const FieldName = styled.h1`
    font-size: 30px;
    margin-left: 120px;
`

export const InfoInput = styled.input`
    height: 50px;
    font-size: 30px;
    margin-left:160px;
`

export const StatusSelect = styled.select`
    height: 50px;
    font-size: 20px;
    width: 80px;
    margin-left:160px;
`

export const SubmitButton = styled.button`
    height: 60px;
    font-size: 40px;
    border: 2px solid white;
    background-color: black;
    color: white;
    margin-left:160px;
    margin-top: 50px;

    &:hover{
        border: 2px solid black;
        background-color: white;
        color: black;
    }
`