import { Controller, UseFormReturn } from "react-hook-form";
import { Field, FieldGroup, FieldLabel, FieldError } from "../ui/field";
import {
  TransferFormType,
  TransferType,
} from "@/lib/clientSchema/transfers/schema";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "../ui/select";
export default function TransferFormView({
  form,
}: {
  form: UseFormReturn<TransferFormType>;
}) {
  return (
    <FieldGroup>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-transfer-name">
                Transfer Name
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-transfer-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Transfer Name"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Controller
        name="price"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-transfer-price">
                Transfer Price
              </FieldLabel>
              <Input
                {...field}
                type="number"
                id="form-rhf-transfer-price"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Transfer Price"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Controller
        name="type"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="form-rhf-transfer-type">
              Transfer Type
            </FieldLabel>

            <Select
              key={field.value}
              value={field.value ?? ""}
              onValueChange={field.onChange}
            >
              <SelectTrigger id="form-rhf-transfer-type">
                <SelectValue placeholder="Select Transfer Type" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Transfer Types</SelectLabel>
                  <SelectItem
                    key={TransferType.PRIVATE}
                    value={TransferType.PRIVATE}
                  >
                    {TransferType.PRIVATE}
                  </SelectItem>
                  <SelectItem
                    key={TransferType.SHARING}
                    value={TransferType.SHARING}
                  >
                    {TransferType.SHARING}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="pickUpLocation"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-transfer-pickUpLocation">
                Pick Up Location
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-transfer-pickUpLocation"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Pick Up Location"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Controller
        name="dropOffLocation"
        control={form.control}
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-transfer-dropOffLocation">
                Drop Off Location
              </FieldLabel>
              <Input
                {...field}
                id="form-rhf-transfer-dropOffLocation"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Drop Off Location"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
    </FieldGroup>
  );
}
