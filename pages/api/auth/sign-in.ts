import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    try {
        const { id: userId, password: userPassowrd, } = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        if (!userPassowrd) {
            return res.status(400).json({ error: 'User not found' })
        }

        const isValidPassword = await bcrypt.compare(password, userPassowrd)

        if (!isValidPassword) {
            return res.status(400).json({ error: 'Invalid password' })
        }

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
        return res.status(500).json({ error: 'Internal server error' })
    }
}