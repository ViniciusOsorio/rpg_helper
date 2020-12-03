import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BarDiv = styled.div`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin: 5px 20px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const NavLink = styled(Link)`
    font-size: 20px;

`