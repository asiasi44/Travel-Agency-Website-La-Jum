import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCountry,
  deleteCountry,
  getAllCountries,
  updateCountry,
} from "../apiClient/country";

export function useCreateCountry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCountry,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function useGetAllCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });
}

export function useUpdateCountry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCountry,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

export function useDeleteCountry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCountry,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
