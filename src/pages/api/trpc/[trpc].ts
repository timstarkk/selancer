import * as trpcNext from '@trpc/server/adapters/next'

import { completeAppRouter } from '@/server/_app'
import { createContext } from '@/server/context'
// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: completeAppRouter,
  createContext,
})
