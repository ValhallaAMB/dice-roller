import { useState } from "react";
import { Eye, EyeOff, Key } from "lucide-react";
import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

type Props<TFieldValues extends FieldValues> = {
  title: string;
  placeholder?: string;
  name: FieldPath<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error: string | undefined;
};

function PasswordInput<TFieldValues extends FieldValues>({
  title,
  placeholder,
  name,
  register,
  error,
}: Props<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <p className="mb-1">{title}</p>
      <section className="input">
        <Key size={16} />
        <input
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          {...register(name)}
          required
        />
        <button
          type="button"
          className="-m-2 cursor-pointer p-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </section>
      {error && <p className="text-error text-xs">{error}</p>}
    </>
  );
}

export default PasswordInput;
