import prisma from "../database/client";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const fullurl = await prisma.link.findFirst({
    where: {
      fullurl: body.url
    }
  })
  return fullurl

})