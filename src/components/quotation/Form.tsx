import { Quotation } from "@/app/quotation/ui/interface";
import { clearQuotation } from "@/store/quotation-slice";
import { makePaymentRequest } from "@/utils/api";
import { notifyError, notifySuccess } from "@/utils/notify-manager";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { InputField } from "./InputField";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Props {
  quotationItems: Quotation[];
}

const QuotationForm: React.FC<Props> = ({ quotationItems }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    dispatch(clearQuotation());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await makePaymentRequest("/api/quotations", {
        data: {
          ...formData,
          products: quotationItems,
        },
      });

      if (formRef.current) {
        formRef.current.reset();
      } else {
        console.log("formRef.current is null");
      }
      notifySuccess("Cotización enviada exitosamente");
      resetForm();
    } catch (error) {
      notifyError("No se pudo enviar la cotización");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex-[1]">
      <div className="text-lg font-bold">Formulario de Cotización</div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="p-5 my-5 bg-black/[0.05] rounded-xl shadow-md"
      >
        <div className=" mb-4 text-md md:text-lg  font-medium text-black">
          Ingresa tus datos para continuar con la cotización:
        </div>
        <InputField
          id="name"
          name="name"
          label="Nombre"
          type="text"
          value={formData.name}
          onChange={handleChange}
          maxLength={100}
          required
        />
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          maxLength={254}
          required
        />
        <InputField
          id="phone"
          name="phone"
          label="Teléfono"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          maxLength={14}
          pattern="[0-9]+"
          required
        />
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <TextareaAutosize
            id="message"
            name="message"
            className="input-field w-full resize-none"
            value={formData.message}
            onChange={handleChange}
            minRows={3}
            maxLength={250}
            required
          />
        </div>
        <div className="max-w-3xl m-auto">
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
            disabled={loading}
          >
            {loading && <img src="/spinner.svg" loading="lazy" />}
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuotationForm;
