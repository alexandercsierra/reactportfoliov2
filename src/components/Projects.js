import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import {projectlist} from '../data/projectlist'
import Project from './Project'

export default function Projects() {


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Title>Projects</Title>
            <ProjectDiv>
                {projectlist.map(proj=>{
                    return <Project key={proj.id} project={proj}/>
                })}
            </ProjectDiv>
            <Button onClick={scrollToTop}>Back to top</Button>
            <Footer footerClass={'footer'}/>
        </div>
    )
}

const Button = styled.button`
    color: #f1f1f1;
    background: #21254f;
    border: 1px solid #21254f;
    margin: 4% auto;
    padding: 1%;
    width: 10%;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        color: #21254f;
        background: #f1f1f1;
    }

    @media(max-width: 1250px){
        width: 12%;
    }
    
    @media(max-width: 960px){
        width: 18%;
        padding: 2%;
    }
    
    @media(max-width: 760px){
        width: 20%;
    }

    @media(max-width: 550px){
        width: 25%;
    }
    @media(max-width: 500px){
        width: 30%;
        padding: 3%;
    }
    @media(max-width: 390px){
        width: 40%;
    }
    
    

`;

// const LeftDiv = styled.div`
//     width: 100%;
//     border: 1px solid red;
// `;

// const Img = styled.img`
//     width: 60%;
// `;

const Title = styled.h1`
    margin: 4%;
    font-size: 3rem;
`;

// const ProjectTitles = styled.div`

// `;

const ProjectDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // margin-bottom: 5%;
    
    width: 100%;
    // height: 200px;
`;
