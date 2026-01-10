import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Controller } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CountryFormProps } from "@/lib/formSchemas/countries/schema";

const CountriesFormView = ({
  form,
  onSubmit,
  isSubmitting,
}: CountryFormProps) => {
  return (
    <DialogContent
      className="w-full sm:max-w-md"
      onOpenAutoFocus={(event) => event.preventDefault()}
    >
      <DialogTitle> Add Country</DialogTitle>
      <DialogDescription>Add new countries to La Jum</DialogDescription>

      <form id="form-rhf-countries" onSubmit={form.handleSubmit(onSubmit)}>
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
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>
      <DialogFooter>
        <Field orientation={"horizontal"} className="flex justify-between">
          <Field orientation={"horizontal"}>
            <Button
              type="button"
              variant={"outline"}
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              type="submit"
              form="form-rhf-countries"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Field>
          <DialogClose asChild>
            <Button type="button" variant={"secondary"}>
              Close
            </Button>
          </DialogClose>
        </Field>
      </DialogFooter>
    </DialogContent>
  );
};

export default CountriesFormView;
