import { z } from 'zod';

export const mediaSchema = z.object({
  adult: z.boolean(),
  release_date: z.string().optional(),
  first_air_date: z.string().optional(),
  media_type: z.string().optional(),
  id: z.number(),
  title: z.string().optional(),
  backdrop_path: z.string(),
  name: z.string().optional(),
});

export type DisplayMedia = {
  id: number;
  displayName: string;
  iconType: string;
  year: string;
  rating: string;
  imageSrc: string;
  mediaType: string;
};

// defining array schema for API response
export const mediaSchemaList = z.array(mediaSchema);

// defining TypeScript types from Zod schemas
export type Media = z.infer<typeof mediaSchema>;
export type MediaList = z.infer<typeof mediaSchemaList>

// api call types for web page
export type ApiCallType = "trending" | "recommended" | "movies" | "tv";
