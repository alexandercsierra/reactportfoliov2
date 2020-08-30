import React, {useState, useEffect} from 'react'
import ProgressBar from './ProgressBar'
import styled from 'styled-components'
// import courses from '../data/courses'
import axios from 'axios'

const Learning = () => {
    const btnDefaults = {
        mostProgress: 'btnInactive',
        leastProgress: 'btnInactive',
        status: 'btnInactive',
        default: 'btnInactive'
    }
    const [showSettings, setShowSettings] = useState(false)
    const [buttonColors, setButtonColors] = useState()
    const [classes, setClasses] = useState({...btnDefaults, default: 'btnActive'})
    const [list, setList] = useState([])
    const [courses, setCourses] = useState([])
    const mostProgress = [...courses].sort((a,b)=> a.progress < b.progress ? 1 : -1)
    const leastProgress = [...courses].sort((a,b)=> a.progress < b.progress ? -1 : 1)
    const status = [...courses].sort((a,b)=> a.status < b.status ? -1 : 1)

    const changeClasses = (btn)=>{
        if(classes[btn] === "btnInactive"){
            let newClasses = {...btnDefaults}
            newClasses[btn] = 'btnActive'
            setClasses(newClasses)
        } else if(classes[btn]==="btnActive"){
            let newClasses = {...btnDefaults}
            newClasses[btn] = 'btnInactive'
            setClasses(newClasses)
        }
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BE}/api/courses`)
            .then(res=>{
                setList(res.data)
                setCourses(res.data)
            })
            .catch(err=>console.log(err))

    },[])

    return(
        <Container>
            <h1>Learning</h1>
            <p>Here's where you can follow new tech I'm learning!</p>
            <ButtonDiv>
                <Button className={classes.mostProgress} onClick={
                    ()=>{
                        setList(()=>mostProgress)
                        changeClasses('mostProgress')
                    }}>Most Complete</Button>
                <Button className={classes.leastProgress} onClick={()=>{
                    setList(()=>leastProgress)
                    changeClasses('leastProgress')
                }}>Least Complete</Button>
                <Button className={classes.status} onClick={()=>{
                    setList(()=>status)
                    changeClasses('status')
                }}>Status</Button>
                <Button className={classes.default} onClick={()=>{
                    setList(()=>courses)
                    changeClasses('default')
                }}>Default</Button>
            </ButtonDiv>
            <ProgressDiv>
                {list.map(course=><ProgressBar key={course.id} course={course}/>)}
            </ProgressDiv>
            <div>
                
            </div>
        </Container>
    )
}

export default Learning

const Container = styled.div`
    margin-top: 8%;
    @media(max-width: 970px){
        margin-top: 0;
        padding-top: 15vh;
    }
`;

const ProgressDiv = styled.div`
    margin: 0 auto;
    width: 75%;
    // padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Settings = styled.p`
    @media(max-width: 960px){
        display: none
    }
`;

const FilterDiv = styled.div`
    align-self: flex-end;
`;

const Icon = styled.svg`
    font-size: 2rem;
    margin: 0 20px;
    cursor: pointer;
    @media(max-width: 760px){
        font-size: 2.5rem;
    }
`;

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100px;
    align-items: center;
    justify-content: center;
`;

const IconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 4% auto;
    @media(max-width: 1000px){
        width: 65%;
    }
    @media(max-width: 670px){
        width: 80%;
    }
    @media(max-width: 490px){
        width: 100%;
    }
`;

const Button = styled.button`
    border: none;
    padding: 1%;
    width: 20%;
    @media(max-width: 1000px){
        width: 25%;
    }
    @media(max-width: 490px){
        font-size: .75rem;
    }
`;