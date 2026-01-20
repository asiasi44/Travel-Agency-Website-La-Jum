import { ColumnDef } from "@tanstack/react-table";
import { TransferFormType } from "./schema";

export const getTransferColumns = (): ColumnDef<TransferFormType>[] => [
  {
    id: "name",
    header: "Name",
    accessorFn: (row) => row.name,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "price",
    header: "Price",
    accessorFn: (row) => row.price,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "type",
    header: "Type",
    accessorFn: (row) => row.type,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "pickUpLocation",
    header: "Pick Up Location",
    accessorFn: (row) => row.pickUpLocation,
    cell: ({ getValue }) => getValue(),
  },
  {
    id: "dropOffLocation",
    header: "Drop Off Location",
    accessorFn: (row) => row.dropOffLocation,
    cell: ({ getValue }) => getValue(),
  },
];
