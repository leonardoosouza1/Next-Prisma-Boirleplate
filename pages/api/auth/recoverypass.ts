import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../src/lib/prisma'

//TODO: add email and phome recovery options

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.body?.email || req.body?.phone) {
        const { id: userId } = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: req.body?.email,
                    },
                    {
                        phone: req.body?.phone,
                    },
                ],
            },
        })
        if (userId) {
            //TODO: send email or message with recovery code
            if ('code' === 'code') {
                await prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        password: req.body?.password,
                    }
                })
            }
        }
    }
}