import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next"
import * as jwt from "jsonwebtoken";

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
