import { z } from 'zod'

import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema'
import { PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema'
import { PostSelectObjectSchema } from './objects/PostSelect.schema'
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema'
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema'

export const PostFindFirstSchema = z.object({
  select: PostSelectObjectSchema.optional(),
  orderBy: z
    .union([
      PostOrderByWithRelationInputObjectSchema,
      PostOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PostWhereInputObjectSchema.optional(),
  cursor: PostWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PostScalarFieldEnumSchema).optional(),
})
