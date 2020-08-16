import React, {useState, useEffect} from 'react'
import {NavLink, useHistory, useLocation} from 'react-router-dom'
import styled from 'styled-components'

export default function Nav() {

    const history = useHistory()
    const location = useLocation().pathname

    const [checked, setChecked] = useState(false)

    const unCheck = () => {
        setChecked(false)
    }

    useEffect(()=>{
        unCheck()
    },[location])





    return (
        <>
        <NavBar>
            <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
            <NavLink to="/about"  className={'links'}>About</NavLink>
            <NavLink to="/projects" className={'links'}>Projects</NavLink>
            <NavLink to="/3dmodels" className={'links'}>3D Models</NavLink>
            <NavLink to="/learning"  className={'links'}>Learning</NavLink>
            <NavLink to="/contact" className={'links'}>Contact</NavLink>
        </NavBar>
        <MobileContainer>
            <input type="checkbox" className="blue" id="menu" onChange={()=>setChecked(!checked)} checked={checked} onClick={()=>setChecked(!checked)}/>
            <label htmlFor="menu" className="icon">
                <div className="menu"></div>
            </label>
            <MobileNav>
                <NavLink to="/" exact={true} className={'links'}>Home</NavLink>
                <NavLink to="/about"  className={'links'}>About</NavLink>
                <NavLink to="/projects" className={'links'}>Projects</NavLink>
                <NavLink to="/3dmodels" className={'links'}>3D Models</NavLink>
                <NavLink to="/learning"  className={'links'}>Learning</NavLink>
                <NavLink to="/contact" className={'links'}>Contact</NavLink>
            </MobileNav>
        </MobileContainer>
        </>
    )
}

const NavBar = styled.div`
    display: flex;
    justify-content: flex-end;
    // @media(max-width: 650px){
    //     justify-content: space-around;
    //     width: 100%;
    // }
    @media(max-width: 970px){
        display: none;
    }
`;

const MobileContainer = styled.div`
    display: none;
    @media(max-width: 970px){
        display: block;
    }
`;

const MobileNav = styled.nav`
// display: none;
    @media(max-width: 970px){
        display: flex;
    // justify-content: flex-end;
    flex-direction: column;
    }
    
`;