"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  countriesFormSchema,
  CountryType,
} from "@/lib/formSchemas/countries/schema";
import CountriesFormView from "./CountriesFormView";
import { useCreateCountry, useUpdateCountry } from "@/lib/hooks/useCountry";
import { toast } from "sonner";
import { useEffect } from "react";

const CountriesForm = ({
  editCountryData,
  setEditCountryData,
}: {
  editCountryData: CountryType | null;
  setEditCountryData: (country: CountryType | null) => void;
}) => {
  const createCountryMutation = useCreateCountry();
  const updateCountryMutation = useUpdateCountry();

  let isEditMode = false;
  if (editCountryData?.id) {
    isEditMode = editCountryData?.id?.length > 0 ? true : false;
  }
  const form = useForm<CountryType>({
    resolver: zodResolver(countriesFormSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (editCountryData) {
      form.reset({ name: editCountryData?.name, id: editCountryData?.id });
    } else {
      form.reset({ name: "", id: "" });
    }
  }, [editCountryData]);

  const onSubmit = (data: CountryType) => {
    if (!isEditMode) {
      toast.promise(
        createCountryMutation.mutateAsync(data, {
          onSuccess: () => {
            form.reset({
              name: "",
              id: "",
            });
          },
        }),
        {
          loading: "Adding Country...",
          success(data) {
            console.log("toast success data", data);
            return {
              message: "Country has been added",
              description: "Country has been added",
            };
          },
          error: "Error adding Country",
        }
      );
    } else {
      toast.promise(
        updateCountryMutation.mutateAsync(
          {
            id: editCountryData?.id || null,
            data,
          },
          {
            onSuccess: () => {
              setEditCountryData(null);
            },
          }
        ),
        {
          loading: "Updating Country...",
          success(data) {
            const country = data?.updatedCountry?.name || "Country";
            return {
              message: `${country} has been updated`,
            };
          },
          error: "Error adding country",
        }
      );
    }
  };

  return (
    <CountriesFormView
      form={form}
      onSubmit={onSubmit}
      isSubmitting={createCountryMutation.isPending}
    />
  );
};

export default CountriesForm;
