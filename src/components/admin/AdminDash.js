import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const AdminDash = () => {

    const history = useHistory();

    return(
        <>
            <h1 style={{paddingTop: '15vh'}}>Admin Console</h1>
            <Button onClick={()=>history.push('/adminprojects')}>Projects</Button>
            <Button onClick={()=>history.push('/admincourses')}>Courses</Button>
        </>
    )
}

export default AdminDash 


const Button = styled.button``;