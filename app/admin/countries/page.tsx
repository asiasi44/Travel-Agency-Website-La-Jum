'use client'
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { countriesConfig } from "@/lib/config/countriesConfig";

export default function CountryPage() {
  return <GenericCrudPage config={countriesConfig} />;
}
