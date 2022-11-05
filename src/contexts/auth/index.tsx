import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'

import { singInRequest, recoverUserRequest, refreshTokenRequest } from '../../services/auth'

type TUser = {
    name?: string
    email?: string
    phone?: string
    token: string
    refreshToken: string
}

type SignType = {
    email: string
    password: string
}

type AuthContextType = TUser & {
    isAuthenticated: boolean,
    signIn: ({ email, password }: SignType) => void,
    signOut: () => void,
    handleRefreshToken: ({ refreshToken }: { refreshToken: string }) => void,
}

export const AuthContext = createContext({} as AuthContextType)

const initialState = {
    token: null,
    refreshToken: null,
}

export const AuthProvider: React.FC = ({ children }) => {
    const [Authdata, setAuthData] = useState(initialState as TUser)
    const isAuthenticated = !!Authdata.token as boolean

    useEffect(() => {
        (async () => {
            const { token, refreshToken } = parseCookies()

            if (token && refreshToken) {
                try {
                    const data = await recoverUserRequest({ token })
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

    const signIn = async ({ email, password }: SignType) => {
        try {
            const { token, refreshToken, user } = await singInRequest({
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
            const { token, refreshToken } = await refreshTokenRequest({ refreshToken: refreshTokenCookie })
            if (!!token && !!refreshToken) {
                const data = await recoverUserRequest({ token })
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
        <AuthContext.Provider value={{ ...Authdata, isAuthenticated, signIn, signOut, handleRefreshToken }}>
            {children}
        </AuthContext.Provider>
    )

}