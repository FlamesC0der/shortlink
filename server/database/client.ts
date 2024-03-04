import pkg from '@prisma/client/edge'

const { PrismaClient } = pkg
const prisma = new PrismaClient()
export default prisma