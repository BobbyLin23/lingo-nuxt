import { eq } from 'drizzle-orm'
import { getAuth } from 'h3-clerk'
import { db } from '~/db/drizzle'
import { challengeProgress, units, userProgress } from '~/db/schema'

export default defineEventHandler(async (event) => {
  try {
    const { userId } = getAuth(event)

    if (!userId) {
      throw createError({
        statusMessage: 'User not authenticated',
        statusCode: 401,
      })
    }

    const userProgressData = await db.query.userProgress.findFirst({
      where: eq(userProgress.userId, userId),
      with: {
        activeCourse: true,
      },
    })

    if (!userProgressData?.activeCourseId) {
      return []
    }

    const data = await db.query.units.findMany({
      where: eq(units.courseId, userProgressData.activeCourseId),
      with: {
        lessons: {
          with: {
            challenges: {
              with: {
                challengeProgress: {
                  where: eq(challengeProgress.userId, userId),
                },
              },
            },
          },
        },
      },
    })

    const normalizedData = data.map((unit) => {
      const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
        const allCompletedChallenges = lesson.challenges.every((challenge) => {
          return challenge.challengeProgress && challenge.challengeProgress.length > 0 && challenge.challengeProgress.every(progress => progress.completed)
        })

        return { ...lesson, completed: allCompletedChallenges }
      })

      return { ...unit, lessons: lessonsWithCompletedStatus }
    })

    return normalizedData
  }
  catch (error) {
    console.error('unit error', error)
    throw createError({
      statusMessage: 'Internal server error',
      statusCode: 500,
    })
  }
})
