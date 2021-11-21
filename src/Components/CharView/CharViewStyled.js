import styled from 'styled-components';

export const OuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 15%;
`

export const RowDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 2px solid black;
    border-bottom: ${props => props.isBottom ? '2px solid black' : 'none'};
    justify-content: space-evenly;
`
export const PairDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-right: ${props => props.rightmost ? 'none' : '2px solid black'};
    justify-content: center;
    width: 100%;    
`

export const NameField = styled.div`
    border-bottom: ${props => props.isPaired ? '2px solid black' : 'none'};
    font-size: 30px;
    font-weight: bold;
    padding: 5px 10px;
    text-align: center;
`

export const ContentField = styled.div`
    font-size: 30px;
    padding: 10px 10px;
    text-align: center;
`