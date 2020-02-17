import React from 'react'
// import profile from '../imgs/transprofile.png'
import Footer from './Footer'
import profile from '../imgs/bw.png'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export default function About() {
    return (
        <div>
            <FadeIn transitionDuration={1000}>
                <TopContainer>
                <ImgDiv>
                <Img src={profile}/>
                </ImgDiv>
                <AboutDiv>
                    <Title>About Me</Title>
                    <Para>Healthcare worker turned web developer, I hold a <Span>B.S. in Health Sciences</Span>. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at <Span>Lambda School</Span>, where I am also employed as a <Span>Team Lead</Span>.</Para>

                    <Para>I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow.</Para>
                </AboutDiv>
                </TopContainer>
            </FadeIn>
            <Footer footerClass={'stickyFooter'}/>
        </div>
        
    )
}

const TopContainer = styled.div`
    display: flex;
    margin-top: 8%;
    @media(max-width: 1050px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;


const ImgDiv = styled.div`
    width: 40%;
    @media(max-width: 1400px){
        width: 50%;
    }
    @media(max-width: 1050px){
        width: 50%
    }
    @media(max-width: 750px){
        width: 70%
    }
`;

const Img = styled.img`
    width: 100%;
`;

const AboutDiv = styled.div`
    width: 75%;
    @media(max-width: 1050px){
        margin-bottom: 8%;
    }
`;

const Title = styled.h1`
    margin: 4%
`;

const Span = styled.span`
    color: #4E72D4;
`;


const Para = styled.p`
    font-size: 1.1rem;
    line-height: 2;
    padding: 2% 15%;
    text-align: left;
    // border: 1px solid red;
    @media(max-width: 1050px){
        font-size: 1rem;
    }
    @media(max-width: 840px){
        padding: 2% 8%;
    }
    @media(max-width: 500px){
        padding: 2%;
    }
`;




