import React from 'react'
import FadeIn from 'react-fade-in'
import Footer from './Footer'
import styled from 'styled-components'
import Typical from 'react-typical'
import logo from '../imgs/smallerlogo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

library.add(faGithub, faLinkedinIn, faEnvelope, faTwitter)




export default function Home() {

    
    return (
        <Container>
            <FadeIn transitionDuration={1000}>
                <FlexDiv>
                    <ImgDiv>
                        <Img src={logo} alt="logo of 3 computer keycaps, with initials ACS on them in purple and blue"/>
                    </ImgDiv>
                    <TitleDiv>
                        <Name>Alexander C Sierra</Name>
                        <Subtitle>
                        <Typical steps={['Full Stack Web Developer', 2000, '3D Modeler', 1500, 'Experienced in React/Redux', 2000, 'Experienced in NodeJS/Express', 2000, 'Full Stack Web Developer', 1500]}
                            loop={1}
                            wrapper="b"/>
                        </Subtitle>
                        <IconDiv>
                            <Link href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope"></Icon></Link>
                            <Link href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon alt="linked in logo" className="fab fa-linkedin-in"></Icon></Link>
                            <Link href="https://github.com/alexandercsierra" target="_blank"><Icon alt="github logo" className="fab fa-github"></Icon></Link>
                            <Link href="https://twitter.com/asierrawebdev" target="_blank"><Icon alt="twitter logo" className="fab fa-twitter"></Icon></Link>
                        </IconDiv>
                    </TitleDiv>        
                </FlexDiv>
            </FadeIn>
            <Footer footerClass={''}/>
        </Container>
    )
}


const Container = styled.div`
    // height: 100vh;
    // border: 1px solid red;
    margin 0 auto;
    padding-top: 3%;
    @mediat (max-width: 1700px){
        padding-top: 4%;
    }
    @media (max-width: 1400px){
        padding-top: 5%;
    }
    @media(max-width: 990px){
        // margin: 5% auto;
    }
`;

const TitleDiv = styled.div`
    width: 60%;
    padding-left: 1%;
    // border: 1px solid red;
    @media (max-width: 990px){
        width: 100%;
        margin-top: 8%;
    }
`;

const FlexDiv = styled.div`
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    @media (max-width: 990px){
        flex-direction: column;
    }
`;
let Icon = styled.svg`
    font-size: 2.5rem;
    color: #f1f1f1;
    // width: 20%;
    // border: 1px solid red;
    @media (max-width: 990px){
        font-size: 2rem;
    }
    @media (max-width: 500px){
        font-size: 1.8rem;
    }
    &:hover{
        color: #4E72D4;
    }
`;

let Link = styled.a`
    margin: 0 4%;
    
`;

const Name = styled.h1`
    font-size: 4rem;
    // border: 1px solid red;
    @media(max-width: 990px){
        font-size: 2.25rem;
    }
    @media(max-width: 400px){
        font-size: 2rem;
    }

`;

const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 3%;
    background: linear-gradient(to right, #30A4CE 0%, #713BDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media(max-width: 990px){
        font-size: 1.8rem;
    }
    @media(max-width: 600px){
        font-size: 1.5rem;
    }
`;

const IconDiv = styled.div`
    // border: 1px solid red;
    width: 50%;
    margin: 4% auto;
    display: flex;
    justify-content: center;
`;


const ImgDiv = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    // border: 1px solid red;
    @media (max-width: 990px){
        width: 30%;
    }
    @media (max-width: 700px){
        width: 35%;
    }
    @media (max-width: 500px){
        width: 50%;
    }
`;

const Img = styled.img`
    width: 100%;
`;

