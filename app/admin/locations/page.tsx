"use client";
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { locationsConfig } from "@/lib/config/locationsConfig";

export default function LocationPage() {
  return <GenericCrudPage config={locationsConfig} />;
}
