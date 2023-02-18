import { z } from 'zod'

import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema'
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema'

export const ProjectDeleteOneSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  where: ProjectWhereUniqueInputObjectSchema,
})
