import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import { bcrypt } from "bcryptjs"
import { jwt } from "jsonwebtoken"

const singIn = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;

    try {
        const { id: userId, password: userPassowrd } = await prisma.user.findUnique({
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

        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

const singUp = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password, phone, document } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        if (user) {
            return res.status(400).json({ error: 'User already exists' })
        }

        const hashedPassword = String((async () => {
            const salt = bcrypt.genSaltSync(10)
            return bcrypt.hashSync(password, salt)
        })())

        const { id: userId } = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                phone,
                document,
            },
        })

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            subject: userId,
            expiresIn: '1d',
        })

        return res.status(200).json({ token })
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

const handleAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const [, token] = authorization.split(' ')

    try {
        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' })
        }

        return res.status(200).json({ user })
    } catch {
        return res.status(401).json({ error: 'Unauthorized' })
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const methods = {
        'POST /sing-in': singIn,
        'POST /sing-up': singUp,
        'GET /': handleAuth,
    }

    const method = methods[`${req.method} ${req.url}`]

    if (method) {
        return method(req, res)
    }

    return res.status(405).json({ error: 'Method not allowed' })
}