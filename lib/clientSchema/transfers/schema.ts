import * as z from "zod";

export enum TransferType {
  SHARING = "SHARING",
  PRIVATE = "PRIVATE",
}
export const transferSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.coerce.number(),
  type: z.enum(TransferType),
  pickUpLocation: z.string(),
  dropOffLocation: z.string(),
});

export type TransferFormType = z.infer<typeof transferSchema>;
