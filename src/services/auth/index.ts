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
    // const res = await instance.post('/auth', {
    //     email,
    //     password,
    // })

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

export const singUpRequest = async ({ email, password, name, phone }: singUpRequestData) => {
    // const res = await instance.post('/auth', {
    //     email,
    //     password,
    // })

    return {
        token: uuid(),
        refreshToken: uuid(),
        user: {
            name: 'John Doe',
            email: 'abc@gmail.com',
            phone: '123456789'
        }
    }
}

export const recoverUserRequest = async ({ token }: { token: string }) => {
    // const res = await instance.get('/auth')

    return {
        user: {
            name: 'John Doe',
            email: 'aagg@gmail.com',
            phone: '123456789'
        }
    }
}

export const refreshTokenRequest = async ({ refreshToken }: { refreshToken: string }) => {
    // const res = await instance.post('/auth/refresh', {
    //     refreshToken,
    // })

    return {
        token: uuid(),
        refreshToken: uuid(),
    }
}