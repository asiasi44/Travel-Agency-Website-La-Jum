import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { CountryType } from "./schema";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CountryColumnsProps {
  onEdit: (country: CountryType) => void;
  onDelete: (country: CountryType) => void;
}

export const getCountryColumns = ({
  onEdit,
  onDelete,
}: CountryColumnsProps): ColumnDef<CountryType>[] => [
  {
    id: "rowNumber",
    header: "S.N.",
    cell: ({ row, table }) => {
      const { pageIndex, pageSize } = table.getState().pagination;
      return pageIndex * pageSize + row.index + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Country Name",
    cell: ({ row }) => {
      return row.getValue("name");
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const country = row.original;
      return (
        <div className="flex gap-8">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will delete the Country Record
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="hover:cursor-pointer">
                  Cancel
                </AlertDialogCancel>
                <Button
                  variant={"destructive"}
                  onClick={() => onDelete(country)}
                >
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant={"secondary"} onClick={() => onEdit(country)}>
            Edit
          </Button>
        </div>
      );
    },
  },
];
