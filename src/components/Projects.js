import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import {projectlist} from '../data/projectlist'
import Project from './Project'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser, faUsers, faUserPlus, faCog, faStar} from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(faUser, faUsers, faUserPlus, faCog, faStar)


export default function Projects() {

    const featured = projectlist.filter(proj=>proj.featured === true)
    const [projects, setProjects] = useState(featured);
    const [showSettings, setShowSettings] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('featured')
    const [iconColors, setIconColors] = useState({
        featured: '#4E72D4',
        solo: '#F1F1F1',
        team: '#F1F1F1',
        all: '#F1F1F1'
    })
    


    const filterProjects = (filter) => {
        setCurrentFilter(filter)
        
        if(filter === "all"){
            setProjects(projectlist)
            let newColors = {
                featured: '#F1F1F1',
                solo: '#F1F1F1',
                team: '#F1F1F1',
                all: '#4E72D4'
            }
            setIconColors(newColors)
        } else if (filter === "team"){
            setProjects(projectlist.filter(proj => proj.solo === false))
            let newColors = {
                featured: '#F1F1F1',
                solo: '#F1F1F1',
                team: '#4E72D4',
                all: '#F1F1F1'
            }
            setIconColors(newColors)
        } else{
            if(filter === "solo"){
                let newColors = {
                    featured: '#F1F1F1',
                    solo: '#4E72D4',
                    team: '#F1F1F1',
                    all: '#F1F1F1'
                }
                setIconColors(newColors)
            } else if(filter == "featured") {
                let newColors = {
                    featured: '#4E72D4',
                    solo: '#F1F1F1',
                    team: '#F1F1F1',
                    all: '#F1F1F1'
                }
                setIconColors(newColors)
            }
            setProjects(projectlist.filter(proj => proj[filter] === true))
        }

        setShowSettings(false)
    }


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

            <Title onClick={()=>console.log('hello')}>Projects</Title>

            <FilterDiv onClick={()=>setShowSettings(!showSettings)}>
                <Icon alt="cog" className="fas fa-cog"></Icon>
            </FilterDiv>

            {showSettings && <FilterDiv style={{background: '#1E1F2C', padding: '2%'}}>

                    <h5>Filter by type</h5>

                    <IconDiv>
                        <div onClick={()=>{
                            filterProjects('featured')
                        }} style={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon alt="single person" className='fas fa-star' style={{color: iconColors.featured}}></Icon>

                        <p style={{marginRight: '2%'}}>Featured</p>
                        </div>
                        <div onClick={()=>{
                            filterProjects('solo')    
                        }} style={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon alt="single person" className='fas fa-user' style={{color: iconColors.solo}}></Icon>

                        <p style={{marginRight: '2%'}}>Solo</p>
                        </div>
                        <div onClick={()=>filterProjects('team')} style={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon style={{fontSize: '2.2rem'}} alt="single person" className="fas fa-users" style={{color: iconColors.team}}></Icon>
                            <p>Team</p>
                        </div>
                        <div onClick={()=>filterProjects('all')} style={{display: 'flex', flexDirection: 'column', height: '100px', width: '100px', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon style={{fontSize: '2rem'}} alt="single person" className="fas fa-user-plus" style={{color: iconColors.all}}></Icon>
                            <p>All</p>
                        </div>
                    </IconDiv>
            </FilterDiv>}
            <ProjectDiv>
                
                {projects && projects.map(proj=>{
                    return <Project key={proj.id} project={proj}/>
                })}
            </ProjectDiv>
            <Button onClick={scrollToTop}>Back to top</Button>
            <Footer footerClass={'footer'}/>
        </div>
    )
}

const FilterDiv = styled.div`
    align-self: flex-end;
`;

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

const Icon = styled.svg`
    font-size: 2rem;
    color: #f1f1f1;
    margin: 0 20px;
    @media(max-width: 760px){
        font-size: 2.5rem;
    }
    &:hover{
        color: #7f7f7f;
    }
`;

const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
`;

const Title = styled.h1`
    margin: 4%;
    font-size: 3rem;
`;

const ProjectDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    // margin-bottom: 5%;
    
    width: 100%;
    // height: 200px;
`;
