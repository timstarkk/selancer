import { z } from 'zod'

import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema'
import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema'
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema'
import { ProjectUncheckedUpdateInputObjectSchema } from './objects/ProjectUncheckedUpdateInput.schema'
import { ProjectUpdateInputObjectSchema } from './objects/ProjectUpdateInput.schema'
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema'

export const ProjectUpsertSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  where: ProjectWhereUniqueInputObjectSchema,
  create: z.union([
    ProjectCreateInputObjectSchema,
    ProjectUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjectUpdateInputObjectSchema,
    ProjectUncheckedUpdateInputObjectSchema,
  ]),
})
