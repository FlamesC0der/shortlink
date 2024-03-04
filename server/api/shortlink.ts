import prisma from "../database/client"

function generateShortenedLinkPattern(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let pattern = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    pattern += characters.charAt(randomIndex);
  }

  return pattern;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const Newpattern = generateShortenedLinkPattern(6)
  
  await prisma.link.create({
    data: {
      shorturl: Newpattern,
      fullurl: body.url
    }
  })
  return Newpattern
})