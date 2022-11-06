import axios from 'axios'
import { parseCookies } from 'nookies'
import { refreshTokenRequest } from '../auth'


const { token } = parseCookies()

const instance = axios.create({
    baseURL: 'http://local.development.com/api',
    headers: {
        apllication: 'form-data',
    }
})

if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}



export default instance