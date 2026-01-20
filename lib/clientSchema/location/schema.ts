import * as z from "zod";

export const locationSchema = z.object({
  id: z.string().optional(),
  city: z.string(),
  countryId: z.string().min(2, "Select a Country"),
  countryName: z.string().optional(),
});

export type LocationFormType = z.infer<typeof locationSchema>;

