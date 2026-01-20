import { CrudConfig } from "../clientSchema/crud/schema";
import {
  countriesFormSchema,
  CountryType,
} from "../clientSchema/countries/schema";
import CountryFormView from "@/components/country/CountryFormView";
import {
  useCreateCountry,
  useDeleteCountry,
  useGetAllCountries,
  useUpdateCountry,
} from "../hooks/useCountry";
import { useCountryTable } from "../hooks/useCountry";

export const countriesConfig: CrudConfig<CountryType, CountryType> = {
  entityName: "Country",
  entityNamePlural: "Countries",
  description: "Add Countries to la jum",
  schema: {
    create: countriesFormSchema,
    update: countriesFormSchema,
    row: countriesFormSchema,
  },
  defaultValues: {
    name: "",
  },
  FormView: CountryFormView,
  formId: "form-rhf-countries",
  hooks: {
    useTable: useCountryTable,
    useCreate: useCreateCountry,
    useUpdate: useUpdateCountry,
    useDelete: useDeleteCountry,
    useGetAll: useGetAllCountries,
  },
};
