/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const firstPostId = '5c03994c-fc16-47e0-bd02-d218a370a078'
  await prisma.post.upsert({
    where: {
      id: firstPostId,
    },
    create: {
      id: firstPostId,
      title: 'Selancer',
      text: '"Se lancer" means "to launch oneself" or "to embark on a new venture". It is used to describe the act of starting something new, often with a sense of enthusiasm or excitement.',
    },
    update: {},
  })

  const firstProjectId = '5c03234c-fc16-47e0-bd02-d255a370a012'
  await prisma.project.upsert({
    where: {
      id: firstProjectId,
    },
    create: {
      id: firstProjectId,
      title: 'First Project',
      url: 'www.thatprojectlocation.com',
      github: 'www.github.com/thatproject',
      description: 'This is an example project generated from `prisma/seed.ts`',
    },
    update: {},
  })
}

main()
  .catch(e => {
    // todo(timstarkk): log some error
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
