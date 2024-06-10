import { db } from '~/db/drizzle'
import { courses } from '~/db/schema'

export async function getCourses() {
  const data = await db.select().from(courses)

  return data
}
