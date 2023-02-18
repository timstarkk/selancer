import { z } from 'zod'

import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema'
import { PostOrderByWithAggregationInputObjectSchema } from './objects/PostOrderByWithAggregationInput.schema'
import { PostScalarWhereWithAggregatesInputObjectSchema } from './objects/PostScalarWhereWithAggregatesInput.schema'
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema'

export const PostGroupBySchema = z.object({
  where: PostWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PostOrderByWithAggregationInputObjectSchema,
      PostOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PostScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PostScalarFieldEnumSchema),
})
