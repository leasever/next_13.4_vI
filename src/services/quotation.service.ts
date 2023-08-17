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
  } catch (error: any) {
    if (error.message === "Failed to fetch") {
      notifyError(
        "No se pudo enviar, servidor en mantenimiento, mejoramos para brindarle un mejor servicio."
      );
    } else {
      notifyError("No se pudo enviar");
    }
    return false;
  }
};
