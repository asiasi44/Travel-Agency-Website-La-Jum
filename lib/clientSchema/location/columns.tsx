import { ColumnDef } from "@tanstack/react-table";
import { LocationFormType } from "./schema";

export const getLocationColumns = (): ColumnDef<LocationFormType>[] => [
  {
    id: "city",
    accessorFn: (row) => row.city,
    header: "City",
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "country",
    accessorFn: (row) => row.countryName,
    header: "Country",
    cell: ({ getValue }) => getValue(),
  },
];