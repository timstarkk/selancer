import { postsRouter } from './Post.router'
import { projectsRouter } from './Project.router'
import { t } from './helpers/createRouter'

export const appRouter = t.router({
  post: postsRouter,
  project: projectsRouter,
})
