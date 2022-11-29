import axios from 'axios'
import { parseCookies } from 'nookies'

const { token } = parseCookies()

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        apllication: 'form-data',
    }
})

if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}



export default instance