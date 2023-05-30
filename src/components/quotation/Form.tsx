import { QuotationItemInterface } from "@/models/quotation.model";
import { ChangeEvent, FormEvent, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface Props {
  cartItems: QuotationItemInterface[];
}

const QuotationForm: React.FC<Props> = ({ cartItems }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log("cart itemde formquotes ", cartItems);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Nombre:", formData.name);
    console.log("Email:", formData.email);
    console.log("Teléfono:", formData.phone);
    console.log("Mensaje:", formData.message);
    // Resto del código para enviar la cotización
  };

  return (
    <div className="flex-[1]">
      <div className="text-lg font-bold">Formulario de Cotización</div>
      <form
        onSubmit={handleSubmit}
        className="p-5 my-5 bg-black/[0.05] rounded-xl shadow-md"
      >
        <div className="text-md md:text-lg font-medium text-black">
          Ingresa tus datos para continuar con la cotización:
        </div>
        <div className="my-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input-field w-full"
            value={formData.name}
            onChange={handleChange}
            maxLength={100}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="input-field w-full"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            maxLength={254}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="input-field w-full"
            value={formData.phone}
            onChange={handleChange}
            pattern="\+\d{2} \d{9}"
            maxLength={14}
            required
          />
          <span className="text-sm text-gray-500 block mt-1">
            Ejemplo: +51 912345678
          </span>
        </div>
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
            required
            maxLength={500}
          />
        </div>
        <div className="max-w-3xl m-auto">
          <button className="w-full py-4 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuotationForm;
