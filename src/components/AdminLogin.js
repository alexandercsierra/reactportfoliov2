import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const AdminLogin = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5001/api/auth/login', user)
            .then(res=>{
                localStorage.setItem('token', res.data.token);
                history.push('/admindash')
            })
            .catch(err=>{
                console.log(err);
                setUser({
                    username: "",
                    password: ""
                })
            })
    }


    return(
        <div style={{paddingTop: '15vh'}}>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" name="username" onChange={handleChange} value={user.username}/>
                <input type="password" placeholder="password" name="password" onChange={handleChange} value={user.password}/>
                <button>login</button>
            </form>
        </div>
    )
}

export default AdminLogin