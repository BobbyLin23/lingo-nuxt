import process from 'node:process'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from '~/db/schema'

const connectionString = process.env.DATABASE_URL as string

const client = postgres(connectionString, {
  prepare: false,
})
const db = drizzle(client, {
  schema,
})

async function main() {
  try {
    console.log('DATABASE_URL:', connectionString)

    console.log('Seeding database...')

    await db.delete(schema.courses)
    await db.delete(schema.userProgress)

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'Spanish',
        imageSrc: '/es.svg',
      },
      {
        id: 2,
        title: 'Italian',
        imageSrc: '/it.svg',
      },
      {
        id: 3,
        title: 'French',
        imageSrc: '/fr.svg',
      },
      {
        id: 4,
        title: 'Croatian',
        imageSrc: '/hr.svg',
      },
    ])
    console.log('Seeding finished')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    process.exit()
  }
}

main()
