import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import Footer from './Footer'
import Form from './Form'
import styled from 'styled-components'
import logo from '../imgs/smallerlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import MUIForm from './MUIForm'
dom.watch()



library.add(faGithubSquare, faLinkedin, faEnvelope, faArrowRight, faArrowLeft)

export default function Contact() {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <div>
        <Container>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <CardFront>
                    <FrontContainer>
                        <ImgDiv>
                            <Img src={logo}/>
                        </ImgDiv>
                        
                        <TextDiv>
                            <h1>Alexander C Sierra</h1>
                            <p>Front End Web Developer</p>
                            <div>
                                <ul style={{color: 'white', textAlign: 'left', marginTop: '15%'}}>
                                    <li>JavaScript</li>
                                    <li>React/Redux</li>
                                </ul>
                                
                            </div>
                        </TextDiv>
                    </FrontContainer>
                    <FlipDiv>
                    <A onClick={handleClick}><Icon  className="fas fa-arrow-right"></Icon></A>
                    </FlipDiv>
                </CardFront>
         
                <CardBack>
                  {/* <Form/> */}
                    <BackDiv>
                        <MUIForm/>
                    </BackDiv>
                    <FlipDiv>
                        <A onClick={handleClick}><Icon  className="fas fa-arrow-left"></Icon></A>
                    </FlipDiv>
                    
                  
                  
                </CardBack>
              </ReactCardFlip>
              {/* <Form/> */}
              
        </Container>
        <Footer footerClass={'footer'}/>
        </div>

    )
}

const A = styled.a`
    // border: 1px solid red;
    cursor: pointer;
    margin-right: 2%;
    margin-bottom: 2%;
`;

const Container = styled.div`
    margin: 4% auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FrontContainer = styled.div`
    // border: 1px solid green;
    display: flex;
    width: 100%;
    height: 90%;
`;

let Icon = styled.svg`
    font-size: 3rem;
    color: #f1f1f1;
    // width: 20%;
    // border: 1px solid red;
`;


const FlipDiv = styled.div`
    // border: 1px solid yellow;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

const Button = styled.button`
    margin: 1%;
    border: none;
    background: none;
    color: #f1f1f1;
    border: 
    padding: 1%;
    font-size: 1.2rem;
`;

const ImgDiv = styled.div`
    width: 50%;
    // border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Img = styled.img`
    // border: 1px solid green;
    // margin-left: 4%;
    // @media(max-width: 1160px){
    //     width: 40%;
    // }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    width: 50%;
`;

const BackDiv = styled.div`
    display: flex;
    flex-direction: column;
    // border: 1px solid green;
    width: 100%;
    height: 90%;

`;

const CardFront = styled.div`
    // border: 1px solid red;
    box-shadow: #000000 0.3em 0.3em 1em;
    background: #010101;
    width: 350px;
    height: 233px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(min-width: 530px){
        width: 500px;
        height: 333px;
    }
    @media(min-width: 750px){
        width: 700px;
        height: 466px;
    }
    @media(min-width:1160px){
        width: 1000px;
        height: 666px;
    }
    @media(min-width:1450px){
        width: 1200px;
        height: 800px;
    }
    // @media(min-width:1600px){
    //     width: 1400px;
    //     height: 787px;
    // }
    @media only screen 
    and (min-device-width: 640px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
        width: 350px;
        height: 233px;
  }
`;

const CardBack = styled.div`
    box-shadow: #000000 0.3em 0.3em 1em;
    background: #010101;
    width: 350px;
    height: 233px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(min-width: 530px){
        width: 500px;
        height: 333px;
    }
    @media(min-width: 750px){
        width: 700px;
        height: 466px;
    }
    @media(min-width:1160px){
        width: 1000px;
        height: 666px;
    }
    @media(min-width:1450px){
        width: 1200px;
        height: 800px;
    }
    // @media(min-width:1600px){
    //     width: 1400px;
    //     height: 787px;
    // }
    @media only screen 
    and (min-device-width: 640px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation: landscape) {
        width: 350px;
        height: 233px;
  }
`;