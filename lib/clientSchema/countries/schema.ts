import * as z from "zod";

export const countriesFormSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(2, {
      message: "Country Name Must be at least 2 characters.",
    })
    .optional(),
});

export type CountryType = z.infer<typeof countriesFormSchema>;
