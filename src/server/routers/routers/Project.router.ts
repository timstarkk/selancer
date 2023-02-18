import { ProjectAggregateSchema } from '../schemas/aggregateProject.schema'
import { ProjectCreateManySchema } from '../schemas/createManyProject.schema'
import { ProjectCreateOneSchema } from '../schemas/createOneProject.schema'
import { ProjectDeleteManySchema } from '../schemas/deleteManyProject.schema'
import { ProjectDeleteOneSchema } from '../schemas/deleteOneProject.schema'
import { ProjectFindFirstSchema } from '../schemas/findFirstProject.schema'
import { ProjectFindManySchema } from '../schemas/findManyProject.schema'
import { ProjectFindUniqueSchema } from '../schemas/findUniqueProject.schema'
import { ProjectGroupBySchema } from '../schemas/groupByProject.schema'
import { ProjectUpdateManySchema } from '../schemas/updateManyProject.schema'
import { ProjectUpdateOneSchema } from '../schemas/updateOneProject.schema'
import { ProjectUpsertSchema } from '../schemas/upsertOneProject.schema'

import { t, publicProcedure } from './helpers/createRouter'

export const projectsRouter = t.router({
  aggregateProject: publicProcedure
    .input(ProjectAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateProject = await ctx.prisma.project.aggregate(input)
      return aggregateProject
    }),
  createManyProject: publicProcedure
    .input(ProjectCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyProject = await ctx.prisma.project.createMany(input)
      return createManyProject
    }),
  createOneProject: publicProcedure
    .input(ProjectCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneProject = await ctx.prisma.project.create(input)
      return createOneProject
    }),
  deleteManyProject: publicProcedure
    .input(ProjectDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyProject = await ctx.prisma.project.deleteMany(input)
      return deleteManyProject
    }),
  deleteOneProject: publicProcedure
    .input(ProjectDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneProject = await ctx.prisma.project.delete(input)
      return deleteOneProject
    }),
  findFirstProject: publicProcedure
    .input(ProjectFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstProject = await ctx.prisma.project.findFirst(input)
      return findFirstProject
    }),
  findFirstProjectOrThrow: publicProcedure
    .input(ProjectFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstProjectOrThrow = await ctx.prisma.project.findFirstOrThrow(
        input,
      )
      return findFirstProjectOrThrow
    }),
  findManyProject: publicProcedure
    .input(ProjectFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyProject = await ctx.prisma.project.findMany(input)
      return findManyProject
    }),
  findUniqueProject: publicProcedure
    .input(ProjectFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueProject = await ctx.prisma.project.findUnique(input)
      return findUniqueProject
    }),
  findUniqueProjectOrThrow: publicProcedure
    .input(ProjectFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueProjectOrThrow =
        await ctx.prisma.project.findUniqueOrThrow(input)
      return findUniqueProjectOrThrow
    }),
  groupByProject: publicProcedure
    .input(ProjectGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByProject = await ctx.prisma.project.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByProject
    }),
  updateManyProject: publicProcedure
    .input(ProjectUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyProject = await ctx.prisma.project.updateMany(input)
      return updateManyProject
    }),
  updateOneProject: publicProcedure
    .input(ProjectUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneProject = await ctx.prisma.project.update(input)
      return updateOneProject
    }),
  upsertOneProject: publicProcedure
    .input(ProjectUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneProject = await ctx.prisma.project.upsert(input)
      return upsertOneProject
    }),
})
