import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
}

export const InputField: React.FC<InputProps> = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  maxLength,
  minLength,
  pattern,
  required,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="input-field w-full"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};
