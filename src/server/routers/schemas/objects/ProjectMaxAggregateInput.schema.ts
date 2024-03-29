import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.ProjectMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    url: z.literal(true).optional(),
    github: z.literal(true).optional(),
    description: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const ProjectMaxAggregateInputObjectSchema = Schema
