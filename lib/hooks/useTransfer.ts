import { getTransferColumns } from "../clientSchema/transfers/columns";
import { TransferFormType } from "../clientSchema/transfers/schema";
import { createCrudHooks, createCrudTableHook } from "./useCrudHooks";

const transferCrud = createCrudHooks<TransferFormType>({
  endpoint: "transfer",
  queryKey: "transfers",
});

export const {
  useGetAll: useGetAllTransfers,
  useCreate: useCreateTransfer,
  useDelete: useDeleteTransfer,
  useUpdate: useUpdateTransfer,
} = transferCrud;

export const useTransfersTable = createCrudTableHook({
  useGetAll: useGetAllTransfers,
  getColumns: getTransferColumns,
  dataKey: "transfers",
});
