import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PostCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    text: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const PostCreateManyInputObjectSchema = Schema
