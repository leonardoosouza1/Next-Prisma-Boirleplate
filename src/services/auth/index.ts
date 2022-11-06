import instance from "../instance"
import { v4 as uuid } from 'uuid'

type singInRequestData = {
    email: string
    password: string
}

type singUpRequestData = {
    email: string
    password: string
    name: string,
    phone: string
}

export const singInRequest = async ({ email, password }: singInRequestData) => {
    console.log('abc')
    const res = await instance.post('/auth/sing-in', {
        email,
        password,
    })
    console.log('res', res);

    return {
        token: uuid(),
        refreshToken: uuid(),
        user: {
            name: 'John Doe',
            email: 'aa@gmai.com',
            phone: '123456789'
        }
    }
}

type singUpResponse = {
    token: string
    refreshToken: string
}

export const singUpRequest = async ({ email, password, name, phone }: singUpRequestData) => {
    try {
        return await instance.post('/auth/sing-up', {
            email,
            password,
            name,
            phone
        }) as singUpResponse
    } catch (e) {
        console.log(e)
        console.error(e)
        return null
    }
}

export const recoverUserRequest = async ({ token }: { token: string }) => {
    try {
        return await instance.get('/auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (e) {
        console.error(e)
        return e
    }
}

export const refreshTokenRequest = async ({ refreshToken }: { refreshToken: string }) => {
    try {
        return await instance.post('/auth/refresh', {
            refreshToken,
        })
    } catch (e) {
        console.error(e)
        return e
    }
}