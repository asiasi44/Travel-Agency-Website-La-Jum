import { getCountryColumns } from "../clientSchema/countries/columns";
import { CountryType } from "../clientSchema/countries/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const countryCrud = createCrudHooks<CountryType>({
  endpoint: "country",
  queryKey: "countries",
});

export const {
  useGetAll: useGetAllCountries,
  useCreate: useCreateCountry,
  useUpdate: useUpdateCountry,
  useDelete: useDeleteCountry,
} = countryCrud;

export const useCountryTable = createCrudTableHook<CountryType>({
  useGetAll: useGetAllCountries,
  getColumns: getCountryColumns,
  dataKey: "countries",
});
