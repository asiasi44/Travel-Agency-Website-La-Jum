import { LocationFormView } from "@/components/location/LocationsFormView";
import { CrudConfig } from "../clientSchema/crud/schema";
import {
  LocationFormType,
  locationSchema,
} from "../clientSchema/location/schema";
import {
  useCreateLocation,
  useDeleteLocation,
  useGetAllLocations,
  useLocationsTable,
  useUpdateLocation,
} from "../hooks/useLocation";

export const locationsConfig: CrudConfig<LocationFormType, LocationFormType> = {
  entityName: "Location",
  entityNamePlural: "Locations",
  description: "Add new Location To La Jum",
  schema: {
    create: locationSchema,
    update: locationSchema,
    row: locationSchema,
  },
  formId: "form-rhf-location",
  FormView: LocationFormView,
  defaultValues: {
    countryName: "",
    countryId: "",
    city: "",
  },
  hooks: {
    useUpdate: useUpdateLocation,
    useCreate: useCreateLocation,
    useDelete: useDeleteLocation,
    useGetAll: useGetAllLocations,
    useTable: useLocationsTable,
  },
};
