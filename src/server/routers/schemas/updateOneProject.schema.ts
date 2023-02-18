import { z } from 'zod'

import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema'
import { ProjectUncheckedUpdateInputObjectSchema } from './objects/ProjectUncheckedUpdateInput.schema'
import { ProjectUpdateInputObjectSchema } from './objects/ProjectUpdateInput.schema'
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema'

export const ProjectUpdateOneSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  data: z.union([
    ProjectUpdateInputObjectSchema,
    ProjectUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjectWhereUniqueInputObjectSchema,
})
