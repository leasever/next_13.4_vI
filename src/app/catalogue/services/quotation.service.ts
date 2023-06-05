import { Quotation } from "@/components/quotation/Form";
import { makePaymentRequest } from "@/utils/api";
import { notifyError, notifySuccess } from "@/utils/notify-manager";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Props {
  formData: FormData;
  quotationItems: Quotation[];
}

export const sendMessaage = async ({ formData, quotationItems }: Props) => {
  try {
    await makePaymentRequest("/api/quotations", {
      data: {
        ...formData,
        products: quotationItems,
      },
    });
    notifySuccess("Cotización enviada con éxito");
    return true;
  } catch (error) {
    notifyError("No se pudo enviar");
    return false;
  }
};
