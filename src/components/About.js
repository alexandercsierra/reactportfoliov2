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
                <Img src={profile} alt="Alex smiling in a puffy vest"/>
                </ImgDiv>
                <AboutDiv>
                    <ParaDiv>
                        <Title>About Me</Title>
                        <Para>Healthcare worker turned web developer, I hold a <Span>B.S. in Health Sciences</Span>. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at <Span>Lambda School</Span>, where I am also employed as a <Span>Team Lead</Span>.</Para>

                        <Para>I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. I also dabble in <Span>3D modelling</Span>, having completed a <Span>65+</Span> hour course in <Span>Blender</Span>. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow.</Para>
                    </ParaDiv>
                    <SkillDiv>
                        <Title>Skills</Title>
                        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>

                            <BtmIconDiv>
                                <IconLabelDiv>
                                    <Icon alt="html5 logo" className="fab fa-html5"></Icon>
                                    <p>HTML5</p>
                                </IconLabelDiv>
                                <IconLabelDiv>
                                    <Icon alt="css3 logo" className="fab fa-css3-alt"></Icon>
                                    <p>CSS3</p>
                                </IconLabelDiv>
                                <IconLabelDiv>
                                    <Icon alt="javascript logo" className="fab fa-js"></Icon>
                                    <p>JavaScript</p>
                                </IconLabelDiv>
                                </BtmIconDiv>
                                <BtmIconDiv>
                                <IconLabelDiv>
                                    <Icon alt="react logo" className="fab fa-react"></Icon>
                                    <p>ReactJS</p>
                                </IconLabelDiv>
                                <IconLabelDiv>
                                    <Icon alt="python logo" className="fab fa-python"></Icon>
                                    <p>Python3</p>
                                </IconLabelDiv>
                                <IconLabelDiv>
                                    <Icon alt="node logo" className="fab fa-node-js"></Icon>
                                    <p>NodeJS</p>
                                </IconLabelDiv>
                            </BtmIconDiv>
                            
                        </div>

                    </SkillDiv>
                </AboutDiv>
                </TopContainer>
            <Footer footerClass={'stickyFooter'}/>
            </FadeIn>
        </div>
        
    )
}

const TopContainer = styled.div`
    display: flex;
    margin-top: 8%;
    // margin-bottom: 4%;
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
    display: flex;
    width: 75%;
    // border: 1px solid green;
    @media(max-width: 1050px){
        flex-direction: column;
        justify-content: center;
        margin-bottom: 8%;
    }
`;

const Title = styled.h1`
    margin: 4%;
    // margin-top: 8%;
    font-size: 2rem;
    // width: 15%;
`;

const Span = styled.span`
    color: #4E72D4;
`;


const Para = styled.p`
    font-size: 1rem;
    line-height: 2;
    padding: 0 2%;
    text-align: left;
    // width: 40%;
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

const IconLabelDiv = styled.div`
    // margin: 4% auto;
    width: 30%;
`;

let Icon = styled.svg`
    font-size: 2.5rem;
    color: #f1f1f1;
    // width: 20%;
    // border: 1px solid red;
    @media (max-width: 990px){
        font-size: 2rem;
    }
    // @media (max-width: 550px){
    //     font-size: 2.5rem;
    // }
    &:hover{
        color: #4E72D4;
    }
`;

const BtmIconDiv = styled.div`
    // border: 1px solid red;
    width: 55%;
    margin: 4% auto;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1500px){
        width: 100%
    }
    // @media(max-width: 1300px){
    //     width: 75%
    // }
    // @media(max-width: 1100px){
    //     width: 75%
    // }
    // @media(max-width: 800px){
    //     width: 90%
    // }
    // @media(max-width: 670px){
    //     width: 100%
    // }
    // @media(max-width: 550px){
    //     flex-direction: column
    // }
`;

const ParaDiv = styled.div`
    width: 50%;
    @media(max-width: 1050px){
        width: 100%;
    }
`;
    
const SkillDiv = styled.div`
    // display: flex;
    width: 50%; 
    @media(max-width: 1050px){
        width: 100%;
    }
`;


