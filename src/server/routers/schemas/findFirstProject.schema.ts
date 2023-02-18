import { z } from 'zod'

import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema'
import { ProjectOrderByWithRelationInputObjectSchema } from './objects/ProjectOrderByWithRelationInput.schema'
import { ProjectSelectObjectSchema } from './objects/ProjectSelect.schema'
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema'
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema'

export const ProjectFindFirstSchema = z.object({
  select: ProjectSelectObjectSchema.optional(),
  orderBy: z
    .union([
      ProjectOrderByWithRelationInputObjectSchema,
      ProjectOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjectWhereInputObjectSchema.optional(),
  cursor: ProjectWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProjectScalarFieldEnumSchema).optional(),
})
