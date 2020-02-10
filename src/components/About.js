import React from 'react'
// import profile from '../imgs/transprofile.png'
import profile from '../imgs/bw.png'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export default function About() {
    return (
        <FadeIn transitionDuration={1000}>
            <TopContainer>
            <ImgDiv>
            <Img src={profile}/>
            </ImgDiv>
            <AboutDiv>
                <Title>About Me</Title>
                <Para>I come from a pre-med background (holding a <Span>B.S. in Health Sciences</Span>), currently working hard to transition into web development. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at <Span>Lambda School</Span>, where I am also employed as a <Span>Team Lead</Span>.</Para>

                <Para>I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow.</Para>
            </AboutDiv>
            </TopContainer>
        </FadeIn>
        
    )
}

const TopContainer = styled.div`
    display: flex;
    margin-top: 8%;

`;


const ImgDiv = styled.div`
    width: 25%;
`;

const Img = styled.img`
    width: 100%;
`;

const AboutDiv = styled.div`
    width: 75%;
    // padding: 8%;
    // border: 1px solid red;
`;

const Title = styled.h1`
    margin: 4%
`;

const Span = styled.span`
    color: #4E72D4;
`;


const Para = styled.p`
    font-size: 1.1rem;
    padding: 2% 15%;
    text-align: left;
    // border: 1px solid red;
`;




