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

    const initialCourse = {
        title:"",
        img:"",
        desc:"",
        progress:0,
        status:""
    }

    const [project, setProject] = useState(initialProject)
    const [course, setCourse] = useState(initialCourse)

    const handleChangeProj = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeCourse = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitProjects = e => {
        e.preventDefault()
        // console.log('project', project)
        axiosWithAuth().post('http://localhost:5001/api/projects', project)
            .then(res=>{
                console.log(res)
                setProject(initialProject)
            })
            .catch(err=>console.log(err))
    }

    const handleSubmitCourses = e => {
        e.preventDefault()
        console.log('course', course)
        axiosWithAuth().post('http://localhost:5001/api/courses', course)
            .then(res=>{
                console.log(res)
                setCourse(initialCourse)
            })
            .catch(err=>console.log(err))
    }


    return(
        <>
            <h1 style={{paddingTop: '15vh'}}>Admin Console</h1>
            <FormContainer>
                <Form onSubmit={handleSubmitProjects}>
                    <h3>Projects</h3>

                    <Label htmlFor="title">Title</Label>
                    <Input name="title" id="title" placeholder="title" onChange={handleChangeProj} value={project.title}/>

                    <Label htmlFor="image">Image URL</Label>
                    <Input name="image" id="image" placeholder="image url" onChange={handleChangeProj} value={project.image}/>

                    <Label htmlFor="alt">Image alt</Label>
                    <Input name="alt" id="alt" placeholder="alt" onChange={handleChangeProj} value={project.alt}/>
                    
                    <Label htmlFor="desc">Description</Label>
                    <Input name="desc" id="desc" placeholder="description" onChange={handleChangeProj} value={project.desc}/>

                    <Label htmlFor="repo">Github Repo</Label>
                    <Input name="repo" id="repo" placeholder="github repo link" onChange={handleChangeProj} value={project.repo}/>

                    <Label htmlFor="url">Live Site URL</Label>
                    <Input name="url" id="url" placeholder="url" onChange={handleChangeProj} value={project.url}/>

                    <Label htmlFor="solo">Is this a solo project?</Label>
                    <Select name="solo" id="solo" onChange={handleChangeProj} value={project.solo}>
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </Select>

                    <Label htmlFor="featured">Is this a featured project?</Label>
                    <Select name="featured" id="featured" onChange={handleChangeProj} value={project.featured}>
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                    </Select>

                    <Label htmlFor="priority">Priority</Label>
                    <Input name="priority" id="priority" type="number" onChange={handleChangeProj} value={project.priority}/>

                    <Button type="submit">Submit</Button>
                </Form>
                <Form onSubmit={handleSubmitCourses}>
                    <h3>Courses</h3>

                    <Label htmlFor="title">Title</Label>
                    <Input name="title" id="title" placeholder="title" onChange={handleChangeCourse} value={course.title}/>

                    <Label htmlFor="img">Image URL</Label>
                    <Input name="img" id="img" placeholder="img url" onChange={handleChangeCourse} value={course.img}/>

                    {/* <Label htmlFor="alt">Image alt</Label>
                    <Input name="alt" id="alt" placeholder="alt" onChange={handleChangeCourse} value={course.alt}/> */}
                    
                    <Label htmlFor="desc">Description</Label>
                    <Input name="desc" id="desc" placeholder="description" onChange={handleChangeCourse} value={course.desc}/>

                    <Label htmlFor="status">Status</Label>
                    <Select name="status" id="status" onChange={handleChangeCourse} value={course.status}>
                        <option value="queued for future learning">queued for future learning</option>
                        <option value="actively working on">actively working on</option>
                        <option value="complete">complete</option>
                    </Select>

                    <Label htmlFor="progress">Progress</Label>
                    <Input name="progress" id="priority" type="number" onChange={handleChangeCourse} value={course.progress}/>

                    <Button type="submit">Submit</Button>
                </Form>
            </FormContainer>
        </>
    )
}

export default AdminDash 

const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
    margin-top: 8%;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;
const Label = styled.label`
    align-self: flex-start;
    margin-top: 4%;
`;
const Input = styled.input`
    padding: 1.5%;
    border-radius: 5px;
    margin-bottom: 3%;
`;
const Select = styled.select``;
const Button = styled.button``;