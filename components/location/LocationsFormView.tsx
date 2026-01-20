import { LocationFormType } from "@/lib/clientSchema/location/schema";
import { Controller, UseFormReturn } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { useGetAllCountries } from "@/lib/hooks/useCountry";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";

export function LocationFormView({
  form,
}: {
  form: UseFormReturn<LocationFormType>;
}) {
  const { data: getAllCountries, isLoading } = useGetAllCountries();
  if (isLoading) return <>loading...</>;
  const countries = getAllCountries?.countries || [];

  return (
    <FieldGroup>
      <Controller
        name="city"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-locations-city">
                City Name
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-locations-city"
                aria-invalid={fieldState.invalid}
                placeholder="Enter City Name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Controller
        name="countryId"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-locations-country">
                Country Name
              </FieldLabel>
              <Select
                key={field.value}
                value={field.value ?? ""}
                onValueChange={field.onChange}
                disabled={isLoading}
              >
                <SelectTrigger id="form-rhf-locations-country">
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    {isLoading ? (
                      <div className="text-gray-500">countries loading...</div>
                    ) : (
                      countries.map((country: { name: string; id: string }) => {
                        return (
                          <SelectItem value={country.id} key={country.id}>
                            {country.name}
                          </SelectItem>
                        );
                      })
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
    </FieldGroup>
  );
}
