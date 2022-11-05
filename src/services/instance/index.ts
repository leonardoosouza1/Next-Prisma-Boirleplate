import axios from 'axios'
import { parseCookies } from 'nookies'
import { refreshTokenRequest } from '../auth'


const { token } = parseCookies()

const instance = axios.create({
    baseURL: 'local.development.com/api',
})

if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}



export default instance