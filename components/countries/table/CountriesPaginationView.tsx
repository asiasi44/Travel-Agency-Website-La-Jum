import { Button } from "@/components/ui/button";
import { CountriesTableProps } from "@/lib/formSchemas/countries/schema";

export function CountriesPaginationView({
  countriesTable,
}: CountriesTableProps) {
  return (
    <div className="flex justify-end gap-4 items-center">
      <Button
        variant={"outline"}
        onClick={() => countriesTable.previousPage()}
        disabled={!countriesTable.getCanPreviousPage()}
      >
        Previous Page
      </Button>
      <span>
        Page {countriesTable.getState().pagination.pageIndex + 1} of{" "}
        {countriesTable.getPageCount()}
      </span>
      <Button
        variant={"outline"}
        onClick={() => countriesTable.nextPage()}
        disabled={!countriesTable.getCanNextPage()}
      >
        Next Page
      </Button>
    </div>
  );
}
