type TUser = {
    name: string | null,
    email: string | null,
    phone: string | null,
    document: string | null,
    token: string | null,
    refreshToken: string | null,
}

type signUpResponse = {
    token: string
    refreshToken: string
}