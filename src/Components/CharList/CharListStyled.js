import styled from 'styled-components';

export const ViewDiv = styled.div`
    margin: 30px 220px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ViewRow = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-bottom: none;
    border-bottom: 2px solid black;
    margin-bottom: 5px;
`

export const RowDiv = styled.div`
    border-right: ${props => props.rightmost ? 'none' : '2px solid black'};
    display: flex;
`

export const FieldName = styled.h1`
    margin-left: 15px;
    margin-right: 15px;
`

export const FieldCharName = styled.p`
    width: 300px;
    font-size: 30px;
    text-align: center;
    margin: 0px;
    padding: 23px 0px;
`

export const FieldCharRace = styled.p`
    width: 200px;
    font-size: 30px;
    text-align: center;
    margin: 0px;
    padding: 23px 0px;
`

export const AllButton = styled.button`
    width: 70px;
    border: none;
    background-color: white;
    outline: none;
    &:hover{
        background-color: gray;
    }
`