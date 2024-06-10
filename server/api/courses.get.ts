import { db } from '~/db/drizzle'
import { courses } from '~/db/schema'

export default defineEventHandler(async () => {
  const data = await db.select().from(courses)

  return JSON.parse(JSON.stringify(data)) as typeof data
})
