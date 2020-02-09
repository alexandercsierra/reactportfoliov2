import React from 'react'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'
import profile from '../imgs/profile.jpg'
import Typical from 'react-typical'

export default function Home() {
    return (
        <Container>
            <FadeIn transitionDuration={1000}>
                <Name>Alexander Sierra</Name>
                <Subtitle>

                <Typical steps={['Front End Web Developer', 2000, '3D Modeler', 1500, 'Experienced in React', 2000, 'Experienced in Redux', 2000, 'Front End Web Developer', 1500]}
                    loop={1}
                    wrapper="b"/>

                </Subtitle>
                {/* <Button>Let's Talk</Button> */}
            </FadeIn>
            {/* <h3><Typical steps={['developer', 1000, '3D modeler', 1000, 'trumpet player', 1000, 'gamer', 1000, 'cat dad', 1000]}
                    loop={Infinity}
                    wrapper="b"/>
            </h3> */}
            {/* <AboutDiv>
                <ImgDiv>
                    <Img src={profile}/>
                </ImgDiv>
                <AboutText>
                    <h3>About Me</h3>
                    <ParaDiv>
                        <p>I come from a pre-med background (holding a B.S. in Health Sciences), currently working hard to transition into web development. Above all else, I love learning new things, and there is certainly no shortage of that in the development world. My learning is currently taking place at Lambda School, where I am also employed as a Team Lead.</p><br/>
                        <p>I find it so satisfying to have a problem, research the solution, then be able to immediately apply my new knowledge to fix a problem I couldn't solve 5 minutes ago. When not developing, I can be found playing trumpet in my community band, or frolicking in the snow.</p>
                    </ParaDiv>
                    
                </AboutText>
            </AboutDiv> */}
            {/* <AboutDiv>
                <AboutText>
                    <h3>About Me</h3>
                </AboutText>
                
            
                <CardDiv>
                    <Card>
                        <h3>Pre-Med</h3>
                        <p>I hold a B.S. in Health Sciences from UCF</p>
                    </Card>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h2>>></h2>
                    </div>
                    
                    <Card>
                        <h3>Lambda School</h3>
                        <p>I started learning web development in earnest in 2019 and haven't stopped developing since</p>
                    </Card>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h2>>></h2>
                    </div>
                    <Card>
                        <h3>Web Developer</h3>
                        <p></p>
                    </Card>
                </CardDiv>
            </AboutDiv> */}
            
            
        </Container>
    )
}


const Container = styled.div`
    // width: 80%;
    margin: 0 auto;
    // border: 1px solid red;
`;

const Name = styled.h1`
    font-size: 4rem;
    margin-top: 5%;
    margin-bottom: 2%;
    @media(max-width: 600px){
        font-size: 3rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 10%;
    background: linear-gradient(to right, #30A4CE 0%, #713BDA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media(max-width: 600px){
        font-size: 1.5rem;
    }
`;

const AboutDiv = styled.div`
    margin-top: 10%;
    justify-content: center;
    // border: 1px solid red;
    // padding: 4%;
    display: flex;
    flex-direction: column;
    

`;

const ImgDiv = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid red;
`;

const Img = styled.img`
    width: 100%;
    padding: 4%;
`;

const AboutText = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    // border: 1px solid red;
    margin: 4% auto;
`;

const ParaDiv = styled.div`
    padding: 3%;
`;

const Card = styled.div`
    color: #F1F1F1;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    background: #21254f;
    width: 25%;
    padding: 2%;
    height: 300px;
    // box-shadow: rgba(0, 0, 0, 0.3) 0.3em 0.3em 1em;
`;

const CardDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10%;
    background: #21254f;
    width: 100%;
`;

const Button = styled.button`
    background: #21254f;
    border: 1px solid #21254f;
    padding: 1.5%;
    border-radius: 5px;
    color: #f1f1f1;
    font-size: 1rem;
    cursor: pointer;
    width: 8%;
    
    &:hover {
        background: #1C1C1C;
        color: #f1f1f1;
        border: 1px solid #f1f1f1;
    }

    @media (max-width: 1400px){
        width: 10%;
        padding: 2%;
    }
    @media (max-width: 1160px){
        width: 15%;
        padding: 2%;
    }
    @media (max-width: 640px){
        width: 20%;
        padding: 2.5%;
    }
    @media (max-width: 460px){
        width: 30%;
        padding: 3%;
    }
`;
