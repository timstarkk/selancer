import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ProjectCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    url: z.string(),
    github: z.string(),
    description: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const ProjectCreateManyInputObjectSchema = Schema
