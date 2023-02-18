import { z } from 'zod'

export const ProjectScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'url',
  'github',
  'description',
  'createdAt',
  'updatedAt',
])
