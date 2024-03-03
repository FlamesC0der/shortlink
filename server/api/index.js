// import express from 'express'
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()
// const app = express()

// app.use(express.json())

// app.post('/shortlink', async (req, res) => {
//   const result = await prisma.link.create({
//     data: {
//       fullurl: req.body.url,
//       shorturl: "2",
//     },
//   })
//   res.json(result)
// })

// export default {
//   path: '/api',
//   handler: app
// }