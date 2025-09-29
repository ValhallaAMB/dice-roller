import useThemeStore from "@stores/useThemeStore";
import { Eye, EyeOff, Key, type LucideIcon } from "lucide-react";
import { useState } from "react";
import type {
  FieldValues,
  InternalFieldName,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  name?: string;
  title: string;
  type: string;
  placeholder?: string;
  Icon?: LucideIcon; // Must be capitalized
  required?: boolean;
  invalidHint?: string;
  className?: string;
  // react-hook-form register function and rules
  register?: UseFormRegister<FieldValues>;
  rules?: RegisterOptions<FieldValues, InternalFieldName>;
};

function CustomInput({
  name,
  title,
  type,
  placeholder = "",
  Icon,
  required = false,
  invalidHint,
  className,
  register,
  rules,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useThemeStore();

  const registerProps = register && name ? register(name, rules) : {};

  return (
    // type === "password" ? (
    //   // Password field with show/hide toggle
    //   <main className="grid space-y-1">
    //     <label className="label">{title}</label>
    //     <div className="join">
    //       <div className="w-full">
    //         <label className="input validator join-item">
    //           <Key size={16} />
    //           <input
    //             {...registerProps}
    //             type={showPassword ? "text" : "password"}
    //             required={required}
    //             placeholder={placeholder || title}
    //             minLength={8}
    //             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    //           />
    //         </label>
    //         <p className="validator-hint text-error">
    //           {invalidHint ?? "Invalid value"}
    //         </p>
    //       </div>
    //       <button
    //         type="button"
    //         className={twMerge(
    //           "btn join-item border-neutral rounded-e-lg border-y-1 border-e-1",
    //           theme === "light" && "border-neutral/30",
    //         )}
    //         onClick={() => setShowPassword(!showPassword)}
    //       >
    //         {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
    //       </button>
    //     </div>
    //   </main>
    // ) :

    // For text, email, etc.
    <main className="space-y-1">
      <label className="label">{title}</label>
      <label className={className ? "" : "input validator"}>
        {Icon && <Icon size={16} />}
        <input
          {...registerProps}
          name={name}
          type={type}
          placeholder={placeholder}
          // required={required}
          className={className}
        />
      </label>
      <div className="validator-hint mt-0.5">
        {invalidHint ?? "Invalid value"}
      </div>
    </main>
  );
}

export default CustomInput;
