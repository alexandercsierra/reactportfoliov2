import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from '../../utils/axiosWithAuth'

const CourseForm = ({isEditing, setIsEditing, courseToEdit, refreshCourses, setRefreshCourses}) => {

    const initialCourse = {
        title:"",
        img:"",
        desc:"",
        progress:0,
        status:""
    }

    const [course, setCourse] = useState(initialCourse)

    useEffect(()=>{
        if(isEditing){
            setCourse(courseToEdit)
        } else{
            setCourse(initialCourse)
        }
    },[isEditing, courseToEdit])

    const handleChangeCourse = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitCourses = e => {
        e.preventDefault()
        if(!isEditing){
            console.log('course', course)
            axiosWithAuth().post(`${process.env.REACT_APP_BE}/api/courses`, course)
                .then(res=>{
                    console.log(res)
                    setCourse(initialCourse)
                    setRefreshCourses(!refreshCourses)
                })
                .catch(err=>console.log(err))

        } else {
            axiosWithAuth().put(`${process.env.REACT_APP_BE}/api/courses/${courseToEdit.id}`, course)
            .then(res=>{
                console.log(res)
                setCourse(initialCourse)
                setIsEditing(false)
                setRefreshCourses(!refreshCourses)
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <FormContainer>
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

export default CourseForm;

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