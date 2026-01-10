"use client";
import { useCountriesTable } from "./useCountriesTable";
import { CountriesTableView } from "./CountriesTableView";
import { CountriesPaginationView } from "./CountriesPaginationView";
import { CountryType } from "@/lib/formSchemas/countries/schema";
import { useDeleteCountry } from "@/lib/hooks/useCountry";
import { toast } from "sonner";

interface CountriesTableProps {
  setEditCountryData: (country: CountryType | null) => void;
}

export function CountriesTable({ setEditCountryData }: CountriesTableProps) {
  const deleteCountryMutation = useDeleteCountry();
  const countriesTable = useCountriesTable({
    onEdit: (country: CountryType) => setEditCountryData(country),
    onDelete: (country: CountryType) => {
      toast.promise(deleteCountryMutation.mutateAsync(country?.id || null), {
        loading: "Deleting Country...",
        success(data) {
          const country = data?.deletedCountry?.name || "something";
          return {
            message: `Successfully Deleted Country ${country}`,
          };
        },
        error: "Error Deleting Country",
      });
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <CountriesTableView countriesTable={countriesTable} />
      <CountriesPaginationView countriesTable={countriesTable} />
    </div>
  );
}
