import { getCountryColumns } from "@/lib/formSchemas/countries/columns";
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useGetAllCountries } from "@/lib/hooks/useCountry";

export function useCountriesTable({ onEdit, onDelete }: any) {
  const { data: countriesData } = useGetAllCountries();

  const countries = countriesData?.countries || [];

  const columns = getCountryColumns({
    onEdit: (country) => onEdit(country),
    onDelete: (country) => onDelete(country),
  });

  return useReactTable({
    data: countries,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
}
