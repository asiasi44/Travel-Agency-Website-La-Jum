import TransferFormView from "@/components/transfer/TransferFormView";
import { CrudConfig } from "../clientSchema/crud/schema";
import {
  TransferFormType,
  transferSchema,
  TransferType,
} from "../clientSchema/transfers/schema";
import {
  useCreateTransfer,
  useDeleteTransfer,
  useGetAllTransfers,
  useTransfersTable,
  useUpdateTransfer,
} from "../hooks/useTransfer";

export const transferConfig: CrudConfig<TransferFormType, TransferFormType> = {
  entityName: "Transfer",
  entityNamePlural: "Transfers",
  description: "Add New Transfer To La Jum",
  schema: {
    create: transferSchema,
    update: transferSchema,
    row: transferSchema,
  },
  defaultValues: {
    name: "",
    type: TransferType.SHARING,
    price: 0,
    id: "",
    pickUpLocation: "",
    dropOffLocation: "",
  },
  formId: "form-rhf-transfer",
  FormView: TransferFormView,
  hooks: {
    useCreate: useCreateTransfer,
    useDelete: useDeleteTransfer,
    useTable: useTransfersTable,
    useGetAll: useGetAllTransfers,
    useUpdate: useUpdateTransfer,
  },
};
