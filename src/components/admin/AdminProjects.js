import React, {useState, useEffect} from 'react'
import ProjectForm from './ProjectForm'
import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const AdminProjects = () => {

    const [projects, setProjects] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [refreshProjects, setRefreshProjects] = useState(false)
    const [projectToEdit, setProjectToEdit] = useState({
        title:"",
        image:"",
        alt:"",
        desc:"",
        repo:"",
        url:"",
        solo: false,
        featured: false,
        priority: 0
    })

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BE}/api/projects`)
            .then(res=>setProjects(res.data.reverse()))
            .catch(err=>console.log(err))
    },[refreshProjects])

    const toggleEdit = (proj) => {
        if(isEditing){
            setIsEditing(false)
        } else{
            setIsEditing(true);
            setProjectToEdit(proj)
        }
    }

    const deleteProject = (id) => {
        axiosWithAuth().delete(`${process.env.REACT_APP_BE}/api/projects/${id}`)
            .then(res=>{
                setRefreshProjects(!refreshProjects)
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1 style={{paddingTop: '15vh'}}>Add or Edit Projects</h1>
            <div style={{display:'flex'}}>
                <div style={{width:'50%'}}>
                    <ProjectForm isEditing={isEditing} setIsEditing={setIsEditing} projectToEdit={projectToEdit} refreshProjects={refreshProjects} setRefreshProjects={setRefreshProjects}/>
                </div>
                <div style={{width:'50%'}}>
                    {projects && projects.map(proj=>{
                        return(
                            <div key={proj.id} style={{margin: '10% auto', background: 'black', padding: '4%', borderRadius: '5px'}}>
                                <h4>{proj.title}</h4>
                                <img style={{width: '50%'}} src={proj.image} alt={proj.alt}/>
                                <p>Image Alt: {proj.alt}</p>
                                <p>Description: {proj.desc}</p>
                                <a href={proj.repo}>Github: {proj.repo}</a>
                                <a href={proj.url}>Live Site: {proj.url}</a>
                                <p>Solo: {proj.solo.toString()}</p>
                                <p>Featured: {proj.featured.toString()}</p>
                                <button onClick={()=>toggleEdit(proj)}>Edit</button>
                                <button onClick={()=>deleteProject(proj.id)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default AdminProjects