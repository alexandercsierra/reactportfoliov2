import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import Footer from './Footer'
import styled from 'styled-components'
import logo from '../imgs/smallerlogo.png'
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
                    {/* <FrontContainer>
                        <ImgDiv>
                            <Img src={logo} alt="logo of 3 computer keycaps, with initials ACS on them in purple and blue"/>
                        </ImgDiv>
                        
                        <TextDiv>
                            <Name>Alexander C Sierra</Name>
                            <Title>Full Stack Web Developer</Title>
                            <div>
                            <IconDiv>
                            <Link href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope"></Icon></Link>
                            <Link href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon alt="linked in logo" className="fab fa-linkedin-in"></Icon></Link>
                            <Link href="https://github.com/alexandercsierra" target="_blank"><Icon alt="github logo" className="fab fa-github"></Icon></Link>
                            <Link href="https://twitter.com/asierrawebdev" target="_blank"><Icon alt="twitter logo" className="fab fa-twitter"></Icon></Link>
                        </IconDiv>
                                
                            </div>
                        </TextDiv>
                    </FrontContainer>
                    <FlipDiv>
                    <A onClick={handleClick}><Icon  alt="arrow to flip card" className="fas fa-arrow-right"></Icon></A>
                    </FlipDiv> */}
                    <BackDiv>
                        <MUIForm/>
                    </BackDiv>
                    <FlipDiv>
                        <A onClick={handleClick}><Icon alt="arrow to flip card" className="fas fa-arrow-right"></Icon></A>
                    </FlipDiv>
                </CardFront>
         
                <CardBack>
                    {/* <BackDiv>
                        <MUIForm/>
                    </BackDiv>
                    <FlipDiv>
                        <A onClick={handleClick}><Icon alt="arrow to flip card" className="fas fa-arrow-left"></Icon></A>
                    </FlipDiv> */}
                    

                    <FrontContainer>
                        <ImgDiv>
                            <Img src={logo} alt="logo of 3 computer keycaps, with initials ACS on them in purple and blue"/>
                        </ImgDiv>
                        
                        <TextDiv>
                            <Name>Alexander C Sierra</Name>
                            <Title>Full Stack Web Developer</Title>
                            <div>
                            <IconDiv>
                            <Link href="mailto:alexandercsierra@gmail.com" target="_blank"><Icon className="fas fa-envelope"></Icon></Link>
                            <Link href="https://www.linkedin.com/in/alexander-sierra-b7519673/" target="_blank"><Icon alt="linked in logo" className="fab fa-linkedin-in"></Icon></Link>
                            <Link href="https://github.com/alexandercsierra" target="_blank"><Icon alt="github logo" className="fab fa-github"></Icon></Link>
                            <Link href="https://twitter.com/asierrawebdev" target="_blank"><Icon alt="twitter logo" className="fab fa-twitter"></Icon></Link>
                        </IconDiv>
                                
                            </div>
                        </TextDiv>
                    </FrontContainer>
                    <FlipDiv>
                    <A onClick={handleClick}><Icon  alt="arrow to flip card" className="fas fa-arrow-right"></Icon></A>
                    </FlipDiv>
                  
                  
                </CardBack>
              </ReactCardFlip>
              
        </Container>
        <Footer footerClass={'stickyFooter'}/>
        </div>

    )
}

const Name = styled.h1`
    @media(max-width:570px){
        font-size: 1.8rem;
    }
`;
const Title = styled.p`
`;
const List = styled.ul`
    @media(max-width:570px){
        font-size: .9rem;
    }
`;

const IconDiv = styled.div`
    // border: 1px solid red;
    width: 100%;
    margin: 4% auto;
    display: flex;
    justify-content: center;
`;

let Link = styled.a`
    margin: 0 4%;
    
`;

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
    // margin-bottom: 10%;
    // border: 1px solid red;

    @media(max-width:1400px){
        margin-top: 8%;
    }

    @media(max-width:1160px){
        margin-top: 12%;
    }

    @media(max-width:1020px){
        margin-top: 20%;
    }
    @media(max-width:740px){
        margin-top: 4%;
    }
    @media(max-width:570px){
        margin-top: 20%;
    }
    @media(max-width:400px){
        margin-top: 15%;
    }
`;

const FrontContainer = styled.div`
    // border: 1px solid green;
    display: flex;
    width: 100%;
    height: 90%;
    @media(max-width: 740px){
        flex-direction: column;
    }
`;

let Icon = styled.svg`
    font-size: 3rem;
    color: #f1f1f1;
    // width: 20%;
    // border: 1px solid red;
    &:hover{
        color: #4E72D4;
    }
`;


const FlipDiv = styled.div`
    // border: 1px solid yellow;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;



const ImgDiv = styled.div`
    width: 50%;
    // border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 740px){
        width: 100%;
    }
    

`;

const Img = styled.img`
    @media(max-width: 1020px){
        width: 75%;
    }
    @media(max-width: 740px){
        width: 55%;
        margin-top: 4%;
    }
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
    width: 50%;
    @media(max-width: 740px){
        width: 100%;
        margin-top: 8%;
    }
    @media(max-width: 400px){
        width: 100%;
        margin-top: 0;
    }
    
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
    width: 1200px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(max-width:1400px){
        width: 923px;
        height: 550px;
    }

    @media(max-width:1160px){
        width: 923px;
        height: 535px;
    }

    @media(max-width:1020px){
        width: 738px;
        height: 520px;
    }
    @media(max-width:740px){
        width: 500px;
        height: 750px;
    }
    @media(max-width:570px){
        width: 350px;
        height: 525px;
    }
    @media(max-width:400px){
        width: 290px;
        height: 460px;
    }
    

//     @media only screen 
//     and (min-device-width: 640px) 
//     and (-webkit-min-device-pixel-ratio: 2)
//     and (orientation: landscape) {
//         width: 350px;
//         height: 233px;
//   }
`;

const CardBack = styled.div`
    box-shadow: #000000 0.3em 0.3em 1em;
    background: #010101;
    width: 1200px;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width:1400px){
        width: 923px;
        height: 550px;
    }

    @media(max-width:1160px){
        width: 923px;
        height: 535px;
    }

    @media(max-width:1020px){
        width: 738px;
        height: 520px;
    }
    @media(max-width:740px){
        width: 500px;
        height: 750px;
    }
    @media(max-width:570px){
        width: 350px;
        height: 525px;
    }
    @media(max-width:400px){
        width: 290px;
        height: 460px;
    }
    // @media only screen 
    // and (min-device-width: 640px) 
    // and (-webkit-min-device-pixel-ratio: 2)
    // and (orientation: landscape) {
    //     width: 350px;
    //     height: 233px;
  }
`;