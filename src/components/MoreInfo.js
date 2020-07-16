import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {projectlist} from '../data/projectlist'
import moreInfo from '../data/moreInfo'
import styled from 'styled-components'

const MoreInfo = () => {
    const [currentProj, setCurrentProj] = useState({})
    const {name} = useParams()
    console.log('name', name)

    useEffect(()=>{
        let proj = moreInfo.filter(project=> project.title === name)
        setCurrentProj(proj[0])
    },[])


    return(
        <div>
            <Title>More Info for: {currentProj.title}</Title>
            <Subtitle>{currentProj.subtitle}</Subtitle>
            <StepContainer>
                {currentProj.steps && currentProj.steps.map(step=>{
                    return(
                        <Step>
                            <ImgDiv>
                                <Img src={step.src}/>
                            </ImgDiv>
                            <DescDiv>
                                <Desc>{step.desc}</Desc>
                            </DescDiv>
                        </Step>
                    )
                })}
            </StepContainer>
            
        </div>
    )
}

export default MoreInfo;

const Title = styled.h1`
    margin-top: 8%;
    @media(max-width: 600px){
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.h5 `
@media(max-width: 600px){
    font-size: 1.2rem;
}
`;

const StepContainer = styled.div`
`;

const Step = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10% auto;
    width: 80%;
    @media(max-width: 970px){
        justify-content: space-between;
        width: 100%;
    }
    @media(max-width: 500px){
        flex-direction: column;
        
    }
`;
const ImgDiv = styled.div`
    width: 50%;
    @media(max-width: 500px){
    }
`;

const Img = styled.img``;

const DescDiv = styled.div`
    width: 50%;
    @media(max-width: 500px){
        width: 80%;
        margin-top: 4%;
    }
`;
const Desc = styled.p`
    padding: 20%;
    margin: 0;
    @media(max-width: 1500px){
        padding: 10%;
    }
    @media(max-width: 1070px){
        padding: 5%;
    }
    @media(max-width: 500px){
    }
`;