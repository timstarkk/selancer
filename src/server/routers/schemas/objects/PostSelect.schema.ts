import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PostSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    text: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const PostSelectObjectSchema = Schema
