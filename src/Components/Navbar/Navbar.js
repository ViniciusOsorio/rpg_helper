import React, { Component } from 'react';
import { BarDiv,
         NavLink } from './NavbarStyled';

class Navbar extends Component {
    render = () => {
        return(
            <BarDiv>
                <NavLink to="/">Characters</NavLink>
                <NavLink to="/create">Create New</NavLink>
                <NavLink to="/testGet">Test Get</NavLink>
                <NavLink to="/testPost">Test Post</NavLink>
                <NavLink to="/testPut">Test Put</NavLink>
                <NavLink to="/testDelete">Test Delete</NavLink>
            </BarDiv>
        );
    }
}

export default Navbar;