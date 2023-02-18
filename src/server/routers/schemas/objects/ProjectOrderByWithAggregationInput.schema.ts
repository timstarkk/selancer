import type { Prisma } from '@prisma/client'
import { z } from 'zod'

import { SortOrderSchema } from '../enums/SortOrder.schema'

import { ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema'
import { ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema'
import { ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema'

const Schema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    github: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjectCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ProjectOrderByWithAggregationInputObjectSchema = Schema
