import { eq } from 'drizzle-orm'

import { db } from '~/db/drizzle'
import { courses } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const courseId = getRouterParam(event, 'id')

  if (!courseId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Id is required',
    })
  }

  const data = await db.query.courses.findFirst({
    where: eq(courses.id, Number.parseInt(courseId)),
    // TODO
  })

  return data
})
