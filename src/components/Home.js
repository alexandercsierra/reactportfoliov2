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
                        <Img src={logo}/>
                    </ImgDiv>
                    <TitleDiv>
                        <Name>Alexander C Sierra</Name>
                        <Subtitle>
                        <Typical steps={['Full Stack Web Developer', 2000, '3D Modeler', 1500, 'Experienced in React/Redux', 2000, 'Experienced in NodeJS/Express', 2000, 'Full Stack Web Developer', 1500]}
                            loop={1}
                            wrapper="b"/>
                        </Subtitle>
                        {/* <Button>Let's talk</Button> */}
                        <IconDiv>
                            <Link href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope"></Icon></Link>
                            <Link href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon className="fab fa-linkedin-in"></Icon></Link>
                            <Link href="https://github.com/alexandercsierra" target="_blank"><Icon className="fab fa-github"></Icon></Link>
                            <Link href="https://twitter.com/asierrawebdev" target="_blank"><Icon className="fab fa-twitter"></Icon></Link>
                        </IconDiv>
                    </TitleDiv>        
                </FlexDiv>
            </FadeIn>
            <Footer footerClass={'stickyFooter'}/>
        </Container>
    )
}


const Container = styled.div`
    height: 80vh;
    // border: 1px solid red;
    margin 0 auto;
    padding-top: 8%;
    @media (max-width: 1400px){
        padding-top: 15%;
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


// const Button = styled.button`
//     background: #21254f;
//     border: 1px solid #21254f;
//     padding: 1.5%;
//     border-radius: 5px;
//     color: #f1f1f1;
//     font-size: 1rem;
//     cursor: pointer;
//     width: 20%;
//     margin-top: 3%;
    
//     &:hover {
//         background: #1C1C1C;
//         color: #f1f1f1;
//         border: 1px solid #f1f1f1;
//     }

//     @media (max-width: 1400px){
//         width: 10%;
//         padding: 2%;
//     }
//     @media (max-width: 1160px){
//         width: 15%;
//         padding: 2%;
//     }
//     @media (max-width: 640px){
//         width: 20%;
//         padding: 2.5%;
//     }
//     @media (max-width: 460px){
//         width: 30%;
//         padding: 3%;
//     }
// `;
