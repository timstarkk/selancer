import { z } from 'zod'

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'text',
  'createdAt',
  'updatedAt',
])
