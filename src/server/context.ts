import { inferAsyncReturnType } from '@trpc/server'
import prisma from '../lib/prisma'

export async function createContext() {
  return {
    prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>