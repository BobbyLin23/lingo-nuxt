import { getAuth } from 'h3-clerk'
import { eq } from 'drizzle-orm'

import { db } from '~/db/drizzle'
import { userProgress } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const { userId } = getAuth(event)

  if (!userId) {
    throw createError({
      statusMessage: 'User not authenticated',
      statusCode: 401,
    })
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  })

  return data
})
