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
    const iconDefaults = {
        featured: 'inactiveIcon',
        solo: 'inactiveIcon',
        team: 'inactiveIcon',
        all: 'inactiveIcon'
    }

    const featured = projectlist.filter(proj=>proj.featured === true)
    const [projects, setProjects] = useState(featured);
    const [showSettings, setShowSettings] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('featured')

    const [iconClasses, setIconClasses] = useState({...iconDefaults, featured: 'activeIcon'})
    

    const changeClasses = (btn)=>{
        if(iconClasses[btn] === "inactiveIcon"){
            let newClasses = {...iconDefaults}
            newClasses[btn] = 'activeIcon'
            setIconClasses(()=>newClasses)
        } else if(iconClasses[btn]==="activeIcon"){
            let newClasses = {...iconDefaults}
            newClasses[btn] = 'inactiveIcon'
            setIconClasses(newClasses)
        }
    }
    const filterProjects = (filter) => {
        setCurrentFilter(filter)
        
        if(filter === "all"){
            setProjects(projectlist)

            let newClasses = {
                featured: 'inactiveIcon',
                solo: 'inactiveIcon',
                team: 'inactiveIcon',
                all: 'activeIcon'
            }


            setIconClasses(newClasses)
        } else if (filter === "team"){
            setProjects(projectlist.filter(proj => proj.solo === false))

            let newClasses = {
                featured: 'inactiveIcon',
                solo: 'inactiveIcon',
                team: 'activeIcon',
                all: 'inactiveIcon'
            }


            setIconClasses(newClasses)
        } else{
            if(filter === "solo"){

                let newClasses = {
                    featured: 'inactiveIcon',
                    solo: 'activeIcon',
                    team: 'inactiveIcon',
                    all: 'inactiveIcon'
                }
    
    
                setIconClasses(newClasses)


            } else if(filter == "featured") {

                let newClasses = {
                    featured: 'activeIcon',
                    solo: 'inactiveIcon',
                    team: 'inactiveIcon',
                    all: 'inactiveIcon'
                }
    
    
                setIconClasses(newClasses)
            }
            setProjects(projectlist.filter(proj => proj[filter] === true))
        }

        // setShowSettings(false)
    }


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

            <Title onClick={()=>console.log('hello')}>Projects</Title>

            <FilterDiv style={{display: 'flex'}} onClick={()=>setShowSettings(!showSettings)}>
                <Settings>Display Settings</Settings>
                <Icon alt="cog" className="fas fa-cog inactiveIcon"></Icon>
            </FilterDiv>

            {showSettings && <FilterDiv style={{background: '#1E1F2C', padding: '2%'}}>

                    <h5>Filter by type</h5>

                    <IconDiv>
                        <FilterWrapper className={iconClasses.featured} onClick={()=>{
                            filterProjects('featured')
                            changeClasses('featured')
                        }}>
                            <Icon alt="star" className={`fas fa-star`} ></Icon>
                            <p style={{marginRight: '2%'}}>Featured</p>
                        </FilterWrapper>
                        <FilterWrapper className={iconClasses.solo} onClick={()=>{
                            filterProjects('solo')
                            changeClasses('solo')
                        }}>
                            <Icon alt="single person" className={`fas fa-user`}></Icon>
                            <p style={{marginRight: '2%'}}>Solo</p>    
                        </FilterWrapper>
                        <FilterWrapper className={iconClasses.team}  onClick={()=>filterProjects('team')}>
                            <Icon style={{fontSize: '2.2rem'}} alt="group of people" className={`fas fa-users`}></Icon>
                            <p>Team</p>
                        </FilterWrapper>
                        <FilterWrapper  className={iconClasses.all} onClick={()=>filterProjects('all')}>
                            <Icon style={{fontSize: '2rem'}} alt="person with a plus symbol" className={`fas fa-user-plus`}></Icon>
                            <p>All</p>
                        </FilterWrapper>
                    </IconDiv>
            </FilterDiv>}
            <ProjectDiv>
                
                {projects && projects.map(proj=>{
                    return <Project key={proj.id} project={proj}/>
                })}
            </ProjectDiv>
            <Button onClick={scrollToTop}>Back to top</Button>
            <Footer footerClass={'footer'}/>
        </Container>
    )
}

const Container = styled.div`
    @media(max-width: 970px){
        margin-top: 0;
        padding-top: 15vh;
    }
`;

const Settings = styled.p`
    @media(max-width: 960px){
        display: none
    }
`;

const FilterDiv = styled.div`
    align-self: flex-end;
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    align-items: center;
    justify-content: center;
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
    margin: 0 20px;
    cursor: pointer;
    @media(max-width: 760px){
        font-size: 2.5rem;
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
    width: 100%;
`;