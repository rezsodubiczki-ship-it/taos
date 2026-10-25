import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      birthYear: z.number().int(),
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
      personalBests2024: z
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
  team,
};
