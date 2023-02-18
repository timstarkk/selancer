import { z } from 'zod'

import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema'
import { PostSelectObjectSchema } from './objects/PostSelect.schema'
import { PostUncheckedCreateInputObjectSchema } from './objects/PostUncheckedCreateInput.schema'

export const PostCreateOneSchema = z.object({
  select: PostSelectObjectSchema.optional(),
  data: z.union([
    PostCreateInputObjectSchema,
    PostUncheckedCreateInputObjectSchema,
  ]),
})
