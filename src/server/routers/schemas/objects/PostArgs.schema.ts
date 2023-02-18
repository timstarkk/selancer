import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { PostSelectObjectSchema } from './PostSelect.schema'

const Schema: z.ZodType<Prisma.PostArgs> = z
  .object({
    select: z.lazy(() => PostSelectObjectSchema).optional(),
  })
  .strict()

export const PostArgsObjectSchema = Schema
