import { Table } from "@tanstack/react-table";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

export const countriesFormSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, {
    message: "Country Name Must be at least 2 characters.",
  }),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CountryType = z.infer<typeof countriesFormSchema>;

export interface CountriesTableProps {
  countriesTable: Table<CountryType>;
}

export type CountryFormProps = {
  form: UseFormReturn<CountryType>;
  onSubmit: (data: CountryType) => void;
  isSubmitting: boolean;
};
