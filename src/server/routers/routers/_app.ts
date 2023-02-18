import { z } from 'zod'

import { procedure, router } from '../../trpc'

import { postsRouter } from './Post.router'
export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      }
    }),

  post: postsRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
