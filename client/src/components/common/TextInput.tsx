import type { LucideIcon } from "lucide-react";
import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

type Props<TFieldValues extends FieldValues> = {
  title: string;
  Icon: LucideIcon;
  placeholder?: string;
  type?: string;
  value?: string;
  name: FieldPath<TFieldValues>;
  disabled?: boolean;
  register: UseFormRegister<TFieldValues>;
  error: string | undefined;
};

function TextInput<TFieldValues extends FieldValues>({
  title,
  Icon,
  placeholder,
  type,
  value,
  name,
  disabled,
  register,
  error,
}: Props<TFieldValues>) {
  return (
    <>
      <p className="mb-1">{title}</p>
      <section className="input">
        <Icon size={16} />
        <input
          placeholder={placeholder}
          type={type ? type : "text"}
          disabled={disabled}
          {...register(name)}
          value={value}
        />
      </section>
      {error && <p className="text-error text-xs">{error}</p>}
    </>
  );
}

export default TextInput;
