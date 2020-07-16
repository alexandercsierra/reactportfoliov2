import React from 'react'
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3Alt, faJs, faReact, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faCube, faLink, faUser, faUsers} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import {Link} from 'react-router-dom'

dom.watch()

library.add(faHtml5, faCss3Alt, faJs, faCube, faReact, faLink, faYoutube, faUser, faUsers)



export default function Project(props) {
    const {project} = props;
    return (
        <Container>
            <LeftDiv>
                <TitleDiv>
                    <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer"><Title>{project.title}
                    {project.solo && <Icon style={{margin: '0 20px', fontSize: '2rem'}} alt="single person" className="fas fa-user" ></Icon>}
                    {!project.solo && <Icon style={{margin: '0 20px', fontSize: '2.2rem'}} alt="single person" className="fas fa-users" ></Icon>}
                    </Title>
                    </ProjectLink>
                </TitleDiv>
                <ImgDiv>
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer"><Img alt={project.alt} src={project.image}/></ProjectLink>
                </ImgDiv>
            </LeftDiv>
            <RightDiv>
                <TextDiv>
                    <p style={{width: '100%'}}>{project.desc}</p>
                    
                </TextDiv>
                <LinkDiv>
                
                    {project.title !== "Extra Pickles" && <A href={project.repo} target="_blank" rel="noopener noreferrer"><Icon alt="github icon" className="fab fa-github-square" ></Icon></A>}

                    <Link to={`/projects/${project.title}`}><Icon alt="github icon" className="fab fa-github-square" ></Icon></Link>

                    <A href={project.url} target="_blank" rel="noopener noreferrer"><Icon alt="link to website" className="fas fa-link" ></Icon></A>
                    {project.title === "Characteristiq" && <A href={project.video} target="_blank" rel="noopener noreferrer"><Icon alt="youtube icon" className="fab fa-youtube" ></Icon></A>}
                    {/* {project.solo && <Icon style={{margin: '0 20px'}} alt="single person" className="fas fa-user" ></Icon>}
                    {!project.solo && <Icon style={{margin: '0 20px'}} alt="single person" className="fas fa-users" ></Icon>} */}
                    
                </LinkDiv>
            </RightDiv>
            
            

        </Container>
    )
}

const A = styled.a`
    margin 0 20px;
    
`;

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectLink = styled.a`
    color: #f1f1f1;
    text-decoration: none;
    &:hover{
        color: #7f7f7f;
        text-decoration: none;
    }

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
    color: #f1f1f1
    @media(max-width: 760px){
        font-size: 2.5rem;
    }
    &:hover{
        color: #7f7f7f;
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
