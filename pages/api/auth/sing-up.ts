import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt"


type RequestBodyType = {
    email: string
    password: string
    phone: string
    name: string
    document: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password, phone, name } = req.body as RequestBodyType

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        console.log('aaaaa', req.body);
        if (user) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const hashedPassword = String((() => {
            const salt = bcrypt.genSaltSync(10)
            return bcrypt.hashSync(password, salt)
        })())

        const { id: userId } = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                name,
            },
        })
        console.log('email', email);

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            subject: userId,
            expiresIn: '1d',
        })
        const refreshToken = jwt.sign({ email }, process.env.JWT_REFRESH_SECRET, {
            subject: userId,
            expiresIn: '30d',
        })

        return res.status(200).json({ token, refreshToken })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ error: error })
    }
}