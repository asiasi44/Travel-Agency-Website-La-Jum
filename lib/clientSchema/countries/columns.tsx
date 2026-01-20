import { ColumnDef } from "@tanstack/react-table";
import { CountryType } from "./schema";

export const getCountryColumns = (): ColumnDef<CountryType>[] => [
  {
    accessorKey: "name",
    header: "Country Name",
    cell: ({ row }) => {
      return row.getValue("name");
    },
  },
];
