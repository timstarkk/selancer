import { z } from 'zod'

import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema'
import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema'
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema'

export const ProjectCreateOneSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  data: z.union([
    ProjectCreateInputObjectSchema,
    ProjectUncheckedCreateInputObjectSchema,
  ]),
})
