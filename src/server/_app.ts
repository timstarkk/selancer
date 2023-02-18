import { z } from 'zod'

import { appRouter } from './routers/routers/index'
import { mergeRouters, procedure, router } from './trpc'

export const procedureRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}, welcome to Selancer`,
      }
    }),
})

export const completeAppRouter = mergeRouters(procedureRouter, appRouter)

// export type definition of API
export type AppRouter = typeof completeAppRouter
