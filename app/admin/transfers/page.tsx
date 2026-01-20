"use client";
import GenericCrudPage from "@/components/crud/GenericCrudPage";
import { transferConfig } from "@/lib/config/transfersConfig";

export default function TransferPage() {
  return <GenericCrudPage config={transferConfig} />;
}
