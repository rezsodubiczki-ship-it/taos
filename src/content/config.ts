import { z, defineCollection } from "astro:content";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string().optional(),
      avatar: image(),
      run: image(),
      bestResults: z.array(z.string()).optional(),
      personalBests: z
        .array(
          z.object({
            event: z.string(),
            time: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = {
  team: teamCollection,
};
