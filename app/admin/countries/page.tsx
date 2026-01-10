"use client";
import AddCountriesDialog from "@/components/countries/add/AddCountriesDialog";
import { CountriesTable } from "@/components/countries/table/CountriesTable";
import { useState } from "react";
import { CountryType } from "@/lib/formSchemas/countries/schema";

export default function Countries() {
  const [editCountryData, setEditCountryData] = useState<CountryType | null>(
    null
  );

  return (
    <div className="py-8 px-12 flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Countries</div>
        <AddCountriesDialog
          setEditCountryData={setEditCountryData}
          editCountryData={editCountryData}
        />
      </div>
      <div>
        <CountriesTable setEditCountryData={setEditCountryData} />
      </div>
    </div>
  );
}
