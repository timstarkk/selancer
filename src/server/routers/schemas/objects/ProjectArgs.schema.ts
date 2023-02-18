import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { ProjectSelectObjectSchema } from './ProjectSelect.schema'

const Schema: z.ZodType<Prisma.ProjectArgs> = z
  .object({
    select: z.lazy(() => ProjectSelectObjectSchema).optional(),
  })
  .strict()

export const ProjectArgsObjectSchema = Schema
