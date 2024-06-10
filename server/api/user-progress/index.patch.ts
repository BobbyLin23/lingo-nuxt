import { eq } from 'drizzle-orm'
import { clerkClient, getAuth } from 'h3-clerk'
import { db } from '~/db/drizzle'
import { courses, userProgress } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const { userId } = getAuth(event)

  const { courseId } = await readBody(event)

  console.log('courseId', courseId)

  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const user = await clerkClient.users.getUser(userId)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  if (!courseId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    })
  }

  const course = await db.query.courses.findFirst({
    where: eq(courses.id, Number.parseInt(courseId)),
  })

  if (!course) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Course not Found',
    })
  }

  const existingUserProgress = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  })

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: course.id,
      userName: user.firstName || 'User',
      userImageSrc: user.imageUrl || '/mascot.svg',
    })
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: course.id,
    userName: user.firstName || 'User',
    userImageSrc: user.imageUrl || '/mascot.svg',
  })
})
