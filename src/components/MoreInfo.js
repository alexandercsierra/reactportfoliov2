import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {projectlist} from '../data/projectlist'
import moreInfo from '../data/moreInfo'

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
            {currentProj && currentProj.desc}
        </div>
    )
}

export default MoreInfo;