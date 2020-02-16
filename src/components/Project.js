import React from 'react'
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3Alt, faJs, faReact, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faCube, faLink} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faHtml5, faCss3Alt, faJs, faCube, faReact, faLink, faYoutube)



export default function Project(props) {
    const {project} = props;
    return (
        <Container>
            <LeftDiv>
                <Title>{project.title}</Title>
                <ImgDiv>
                    <Img src={project.image}/>
                </ImgDiv>
            </LeftDiv>
            <RightDiv>
                <TextDiv>
                    <p style={{width: '100%'}}>{project.desc}</p>
                </TextDiv>
                <LinkDiv>
                    <A href={project.repo} target="_blank"><Icon className="fab fa-github-square"  style={{color: "#f1f1f1"}}></Icon></A>
                    <A href={project.url} target="_blank"><Icon className="fas fa-link"  style={{color: "#f1f1f1"}}></Icon></A>
                    {project.title === "Characteristiq" && <A href={project.video} target="_blank"><Icon className="fab fa-youtube"  style={{color: "#f1f1f1"}}></Icon></A>}
                </LinkDiv>
            </RightDiv>
            
            

        </Container>
    )
}

const A = styled.a`
    margin 0 20px;
`;

const Title = styled.h2`
    margin-top: 2%;
    font-size: 2rem;
    @media(max-width: 600px){
        font-size: 1.5rem;
    }
`;

const Icon = styled.svg`
    font-size: 3rem;
    @media(max-width: 760px){
        font-size: 2.5rem;
    }
`;
const Container = styled.div`
    display: flex;
    margin-top: 2%;
    // background: #21254f1;
    background: rgba(33,37,79,.3);

    @media(max-width: 960px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3% 0;
    }
    @media(max-width: 760px){
        margin-top: 6%;
    }
`;

const ImgDiv = styled.div`
    width: 70%;
    margin: 4% auto;
    @media(max-width: 760px){
        width: 100%;
    }
`;

const TextDiv = styled.div`
    height: 80%;
    padding: 10%;
    font-size: 1.2rem;
    @media(max-width:1330px){
        font-size: 1rem;
        padding: 8%;
    }
    @media(max-width: 960px){
        font-size: 1.2rem;
        padding: 5%;
    }
    @media(max-width: 760px){
        font-size: 1rem;
        padding: 3%;
    }
`;

const LinkDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media(max-width: 1290px){
        
    }
`;

const Img = styled.img`
    width: 100%;
`;

const LeftDiv = styled.div`
    width: 50%;
    @media(max-width: 960px){
        width: 80%;
    }
    @media(max-width: 760px){
        width: 100%;
    }
`;
const RightDiv = styled.div`
    width: 50%;
    @media(max-width: 960px){
        width: 80%;
    }
    @media(max-width: 760px){
        width: 100%;
    }
`;
