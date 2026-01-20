"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CrudConfig } from "@/lib/clientSchema/crud/schema";
import { FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const GenericForm = <TForm extends FieldValues, TRow>({
  config,
  editData,
  isEditMode,
  resetKey,
}: {
  config: CrudConfig<TForm, TRow>;
  editData: TForm | null;
  isEditMode: boolean;
  resetKey: any;
}) => {
  console.log("isEditmode", isEditMode);
  const form = useForm<TForm>({
    resolver: zodResolver(config.schema.create),
    defaultValues: config.defaultValues,
    values: (editData ?? config.defaultValues) as TForm,
  });
  const updateMutation = config.hooks.useUpdate();
  const createMutation = config.hooks.useCreate();


  const onSubmit = (data: TForm) => {
    console.log(`Submitted ${config.entityName}:`, data);
    if (isEditMode) {
      updateMutation.mutate({ id: data?.id, data });
    } else {
      createMutation.mutate({ body: data });
    }
  };

  const FormView = config.FormView;

  return (
    <form
      id={config.formId}
      onSubmit={(e) => {
        console.log("native submit fired");
        console.log("errors", form.formState.errors);
        form.handleSubmit(onSubmit)(e);
      }}
    >
      <FormView form={form} editData={editData} resetKey={resetKey} />
      <div className="flex gap-2 mt-4">
        <Button
          variant="secondary"
          type="button"
          onClick={() => form.reset(config.defaultValues)}
        >
          Reset
        </Button>
        <Button type="submit">{isEditMode ? "Update" : "Submit"}</Button>
      </div>
    </form>
  );
};

export default GenericForm;
