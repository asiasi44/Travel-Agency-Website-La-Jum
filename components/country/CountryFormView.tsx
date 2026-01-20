import { Controller, UseFormReturn } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CountryType } from "@/lib/clientSchema/countries/schema";

const CountryFormView = ({
  form,
  editData,
}: {
  form: UseFormReturn<CountryType>;
  editData: any;
}) => {
  console.log(editData)
  return (
    <FieldGroup>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-countries-name">
              Country Name
            </FieldLabel>
            <Input
              {...field}
              id="form-rhf-countries-name"
              aria-invalid={fieldState.invalid}
              placeholder="Enter Country Name"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  );
};

export default CountryFormView;
