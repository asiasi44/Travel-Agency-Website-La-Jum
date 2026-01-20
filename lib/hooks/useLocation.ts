import { getLocationColumns } from "../clientSchema/location/columns";
import { LocationFormType } from "../clientSchema/location/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const locationCrud = createCrudHooks<LocationFormType>({
  endpoint: "location",
  queryKey: "locations",
});

export const {
  useGetAll: useGetAllLocations,
  useCreate: useCreateLocation,
  useDelete: useDeleteLocation,
  useUpdate: useUpdateLocation,
} = locationCrud;

export const useLocationsTable = createCrudTableHook({
  useGetAll: useGetAllLocations,
  getColumns: getLocationColumns,
  dataKey: "locations",
});
