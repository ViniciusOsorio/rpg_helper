import styled from 'styled-components';

export const ViewDiv = styled.div`
    border: 2px solid black;
    margin: 30px 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ViewRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const RowDiv = styled.div`
    border-right: ${props => props.rightmost ? 'none' : '2px solid black'};
    display: flex;
    flex-wrap: wrap;
`

export const FieldName = styled.h1`
    margin-left: 15px;
    margin-right: 15px;
`

export const FieldCharName = styled.p`
    width: 400px;
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