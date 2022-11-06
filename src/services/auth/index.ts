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
    try {
        const { data } = await instance.post('/auth/sign-in', {
            email,
            password,
        })
        return data
    } catch (e) {
        console.error(e)
        return e
    }
}

type singUpResponse = {
    token: string
    refreshToken: string
}

export const singUpRequest = async ({ email, password, name, phone }: singUpRequestData) => {
    try {
        return await instance.post('/auth/sign-up', {
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