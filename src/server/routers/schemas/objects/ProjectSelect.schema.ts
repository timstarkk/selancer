import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ProjectSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    url: z.boolean().optional(),
    github: z.boolean().optional(),
    description: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const ProjectSelectObjectSchema = Schema
