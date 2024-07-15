import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {


  const author = {
    name: "Ana Beatriz",
    username: "anabeatriz_dev",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
  };

  const ana = await prisma.user.upsert(
    {
      where: { username: author.username },
      update: {},
      create: author,
    }
  )

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
