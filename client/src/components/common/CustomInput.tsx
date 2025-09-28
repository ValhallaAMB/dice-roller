import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  type: string;
  placeholder: string;
  Icon?: LucideIcon; // Must be capitalized
  required: boolean;
  invalidHint?: string;
  className?: string;
};

function CustomInput({
  title,
  type,
  placeholder,
  Icon,
  required,
  invalidHint,
  className,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="label">{title}</label>
      <label className={className ? "" : "input validator"}>
        {Icon && <Icon size={16} />}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={className}
        />
      </label>
      <div className="validator-hint mt-0.5 hidden">{invalidHint}</div>
    </div>
  );
}

export default CustomInput;
