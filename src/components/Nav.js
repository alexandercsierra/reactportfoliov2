import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {
    return (
        <NavBar>
            <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
            <NavLink to="/about"  className={'links'}>About</NavLink>
            <NavLink to="/projects" className={'links'}>Projects</NavLink>
            <NavLink to="/3dmodels" className={'links'}>3D Models</NavLink>
            <NavLink to="/contact" className={'links'}>Contact</NavLink>
        </NavBar>
    )
}

const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    @media(max-width: 650px){
        justify-content: space-around;
        width: 100%;
    }
`;
