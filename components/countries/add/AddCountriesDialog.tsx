"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CountriesForm from "./CountriesForm";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { CountryType } from "@/lib/formSchemas/countries/schema";
import { useState } from "react";

type AddCountryDialogProps = {
  setEditCountryData: (country: CountryType | null) => void;
  editCountryData: CountryType | null;
};

const AddCountriesDialog = ({
  setEditCountryData,
  editCountryData,
}: AddCountryDialogProps) => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <Dialog
      open={editCountryData !== null || openAdd}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setEditCountryData(null);
          setOpenAdd(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => {
            setEditCountryData(null);
            setOpenAdd(true);
          }}
        >
          <PlusIcon />
          Add Countries
        </Button>
      </DialogTrigger>
      <CountriesForm editCountryData={editCountryData} setEditCountryData={setEditCountryData} />
    </Dialog>
  );
};
export default AddCountriesDialog;
