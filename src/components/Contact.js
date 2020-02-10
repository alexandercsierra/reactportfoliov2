import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import Form from './Form'
import styled from 'styled-components'
import logo from '../imgs/smallerlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()


library.add(faGithubSquare, faLinkedin, faEnvelope)

export default function Contact() {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <Container>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <CardFront onClick={handleClick}>
                    <Img src={logo}/>
                    <TextDiv>
                        <h1>Alexander C Sierra</h1>
                        <p>Front End Web Developer</p>
                        <div>
                            <ul style={{color: 'white', textAlign: 'left', marginTop: '15%'}}>
                                <li>HTML/CSS/JavaScript</li>
                                <li>React/Redux</li>
                            </ul>
                        </div>
                    </TextDiv>
                </CardFront>
         
                <CardBack>
                  <Form/>
                </CardBack>
              </ReactCardFlip>
              {/* <Form/> */}
        </Container>
    )
}

const Container = styled.div`
    margin: 4% auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    margin-left: 4%;
    @media(max-width: 1160px){
        width: 40%;
    }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    width: 100%;
`;


const CardFront = styled.div`
    // border: 1px solid red;
    box-shadow: #000000 0.3em 0.3em 1em;
    background: #010101;
    width: 350px;
    height: 233px;
    display: flex;
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