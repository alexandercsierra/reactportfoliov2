import React, {useState} from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const AdminDash = () => {

    const initialProject = {
        title:"",
        image:"",
        alt:"",
        desc:"",
        repo:"",
        url:"",
        solo: false,
        featured: false,
        priority: 0
    }

    const [project, setProject] = useState(initialProject)

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log('project', project)
        axiosWithAuth().post('http://localhost:5001/api/projects', project)
            .then(res=>{
                console.log(res)
                setProject(initialProject)
            })
            .catch(err=>console.log(err))
    }


    return(
        <>
            <h1 style={{paddingTop: '15vh'}}>Admin Console</h1>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h3>Projects</h3>

                    <Label htmlFor="title">Title</Label>
                    <Input name="title" id="title" placeholder="title" onChange={handleChange} value={project.title}/>

                    <Label htmlFor="image">Image URL</Label>
                    <Input name="image" id="image" placeholder="image url" onChange={handleChange} value={project.image}/>

                    <Label htmlFor="alt">Image alt</Label>
                    <Input name="alt" id="alt" placeholder="alt" onChange={handleChange} value={project.alt}/>
                    
                    <Label htmlFor="desc">Description</Label>
                    <Input name="desc" id="desc" placeholder="description" onChange={handleChange} value={project.desc}/>

                    <Label htmlFor="repo">Github Repo</Label>
                    <Input name="repo" id="repo" placeholder="github repo link" onChange={handleChange} value={project.repo}/>

                    <Label htmlFor="url">Live Site URL</Label>
                    <Input name="url" id="url" placeholder="url" onChange={handleChange} value={project.url}/>

                    <Label htmlFor="solo">Is this a solo project?</Label>
                    <Select name="solo" id="solo" onChange={handleChange} value={project.solo}>
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </Select>

                    <Label htmlFor="featured">Is this a featured project?</Label>
                    <Select name="featured" id="featured" onChange={handleChange} value={project.featured}>
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </Select>

                    <Label htmlFor="priority">Priority</Label>
                    <Input name="priority" id="priority" type="number" onChange={handleChange} value={project.priority}/>

                    <Button type="submit">Submit</Button>
                </Form>
                <Form></Form>
            </FormContainer>
        </>
    )
}

export default AdminDash 

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Label = styled.label`
    align-self: flex-start;
`;
const Input = styled.input`
    padding: 1.5%;
    border-radius: 5px;
    margin-bottom: 3%;
`;
const Select = styled.select``;
const Button = styled.button``;