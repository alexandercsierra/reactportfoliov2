import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavBar>
            <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
            <NavLink to="/projects" className={'links'}>Projects</NavLink>
            <NavLink to="/contact" className={'links'}>Contact</NavLink>
        </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    @media(max-width: 500px){
        justify-content: center;
        width: 100%;
    }
`;

// const TheLink = styled(NavLink)`
//     text-decoration: none;
//     // color: #F1F1F1;
//     padding: 2% 4%;
//     width: 10%;
// `;
