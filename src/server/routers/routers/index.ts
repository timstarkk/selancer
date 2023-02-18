import { postsRouter } from './Post.router'
import { t } from './helpers/createRouter'

export const appRouter = t.router({
  post: postsRouter,
})
