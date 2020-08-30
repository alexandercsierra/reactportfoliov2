import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://acsportfoliobackend.herokuapp.com',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}