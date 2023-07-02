import { FormDataQuotation, ProductQuotation } from "@/models/quotation.model";
import { makePaymentRequest } from "@/utils/api";
import { notifyError, notifySuccess } from "@/utils/notify-manager";

export interface Props {
  formData: FormDataQuotation;
  quotationItems: ProductQuotation[];
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
    console.log("error ", error);
    return false;
  }
};
