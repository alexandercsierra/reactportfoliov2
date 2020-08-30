import React, {useState, useEffect} from 'react'
import CourseForm from './CourseForm'
import axios from 'axios'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const AdminCourses = () => {

    const [courses, setCourses] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [refreshCourses, setRefreshCourses] = useState(false)
    const [courseToEdit, setCourseToEdit] = useState({
        title:"",
        img:"",
        desc:"",
        progress:0,
        status:""
    })

    useEffect(()=>{
        axios.get(`https://acsportfoliobackend.herokuapp.com/api/courses`)
            .then(res=>setCourses(res.data.reverse()))
            .catch(err=>console.log(err))
    },[refreshCourses])

    const toggleEdit = (course) => {
        if(isEditing){
            setIsEditing(false)
        } else{
            setIsEditing(true);
            setCourseToEdit(course)
        }
    }

    const deleteCourse = (id) => {
        axiosWithAuth().delete(`/api/courses/${id}`)
            .then(res=>{
                setRefreshCourses(!refreshCourses)
            })
            .catch(err=>console.log(err))
    }


    return(
        <div>
        <h1 style={{paddingTop: '15vh'}}>Add or Edit Courses</h1>
        <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>
                <CourseForm isEditing={isEditing} setIsEditing={setIsEditing} courseToEdit={courseToEdit} refreshCourses={refreshCourses} setRefreshCourses={setRefreshCourses}/>
            </div>
            <div style={{width:'50%'}}>
                {courses && courses.map(course=>{
                    return(
                        <div key={course.id} style={{margin: '10% auto', background: 'black', padding: '4%', borderRadius: '5px'}}>
                            <h4>{course.title}</h4>
                            <img style={{width: '50%'}} src={course.image}/>
                            <p>Description: {course.desc}</p>
                            <p>Progress: {course.progress}%</p>
                            <p>Status {course.status}</p>
                            <button onClick={()=>toggleEdit(course)}>Edit</button>
                            <button onClick={()=>deleteCourse(course.id)}>Delete</button>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
    )
}

export default AdminCourses