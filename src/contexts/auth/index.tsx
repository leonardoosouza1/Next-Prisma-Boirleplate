import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'

import { signInRequest, signUpRequest, recoverUserRequest, refreshTokenRequest } from '../../services/auth'

type SignUpType = {
    email: string
    password: string
    document: string
    name: string
    phone: string
}

type SignInType = {
    email: string
    password: string
}

type AuthContextType = TUser & {
    isAuthenticated: boolean,
    signIn: ({ email, password }: SignInType) => void,
    signUp: ({ email, password, name, phone }: SignUpType) => void,
    signOut: () => void,
    handleRefreshToken: ({ refreshToken }: { refreshToken: string }) => void,
}

export const AuthContext = createContext({} as AuthContextType)

const initialState = {
    token: null,
    refreshToken: null,
    name: null,
    email: null,
    phone: null,
    document: null,
}

export const AuthProvider: React.FC = ({ children }) => {
    const [Authdata, setAuthData] = useState<TUser>(initialState)
    const isAuthenticated = !!Authdata?.token as boolean

    useEffect(() => {
        (async () => {
            const { token, refreshToken } = parseCookies()

            if (token && refreshToken) {
                try {
                    const data = await recoverUserRequest({ token }) as TUser
                    setAuthData({
                        ...data,
                        token,
                        refreshToken
                    })
                } catch (e) {
                    console.error(e)
                    return signOut()
                }
            }
        })()
    }, [])

    const signUp = async ({ email, password, name, phone, document }: SignUpType) => {
        try {
            const { token, refreshToken } = await signUpRequest({ email, password, name, phone, document }) as signUpResponse
            setAuthData({
                email,
                name,
                phone,
                document,
                token,
                refreshToken
            })
            setCookie(undefined, 'token', token as string, {
                maxAge: 60 * 60 * 1, // 1 hour
            })
            setCookie(undefined, 'refreshToken', refreshToken as string, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
            })
        } catch (e) {
            console.error(e)
        }
    }

    const signIn = async ({ email, password }: SignInType) => {
        try {
            const { token, refreshToken, user } = await signInRequest({
                email,
                password
            })
            setAuthData({
                ...user,
                token,
                refreshToken
            })
            setCookie(undefined, 'token', token, {
                maxAge: 60 * 60 * 1 // 1 hour
            })
            setCookie(undefined, 'refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 7 // 7 days
            })
        } catch (e) {
            console.error(e)
        }
    }

    const signOut = () => {
        try {
            setAuthData(initialState)
            setCookie(undefined, 'token', '', {
                maxAge: 0
            })
            setCookie(undefined, 'refreshToken', '', {
                maxAge: 0
            })
        } catch (e) {
            console.error(e)
        }
    }

    const handleRefreshToken = async () => {
        try {
            const { refreshToken: refreshTokenCookie } = parseCookies()
            const { token, refreshToken } =
                await refreshTokenRequest({ refreshToken: refreshTokenCookie }) as TUser
            if (!!token && !!refreshToken) {
                const data = await recoverUserRequest({ token }) as TUser
                setAuthData({
                    ...data,
                    token,
                    refreshToken
                })
            }
        } catch (e) {
            console.error(e)
            return signOut()
        }
    }

    return (
        <AuthContext.Provider value={{ ...Authdata, isAuthenticated, signIn, signUp, signOut, handleRefreshToken }}>
            {children}
        </AuthContext.Provider>
    )

}