import { SizeProd } from "@/models/cart.model";
import { clearQuotation } from "@/store/quotation-slice";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { sendMessaage } from "../../app/catalogue/services/quotation.service";
import { InputField } from "./InputField";
import { FormDataQuotation, ProductQuotation } from "@/models/quotation.model";



interface Props {
  quotationItems: ProductQuotation[];
}

const QuotationForm: React.FC<Props> = ({ quotationItems }) => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormDataQuotation>({
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const status = await sendMessaage({ formData, quotationItems });
    // status && dispatch(clearQuotation());
    setLoading(false);
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
          minLength={3}
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
          minLength={9}
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
            maxLength={200}
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
