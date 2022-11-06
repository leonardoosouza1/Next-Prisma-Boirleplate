import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../lib/prisma"
import * as jwt from "jsonwebtoken";

type MiddlewareType = (req: NextApiRequest, res: NextApiResponse, ctx?: any) => void

const authMiddleware = (handler: MiddlewareType) => async (req: NextApiRequest, res: NextApiResponse) => {
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

        return handler(req, res, { user })
    } catch {
        return res.status(401).json({ error: 'Unauthorized' })
    }
}

export default authMiddleware