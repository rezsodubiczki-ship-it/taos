import { z, defineCollection } from "astro:content";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      avatar: image(),
      birthYear: z.number(),
      bestResults: z.array(
        z.object({
          year: z.number(),
          competition: z.string(),
          event: z.string(),
          result: z.string(),
        })
      ),
      personalBests: z.array(
        z.object({
          event: z.string(),
          time: z.string(),
        })
      ),
    }),
});

export const collections = {
  team: teamCollection,
};
