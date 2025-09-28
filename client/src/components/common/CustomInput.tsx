import useThemeStore from "@store/useThemeStore";
import { Eye, EyeOff, Key, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

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
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useThemeStore();

  return type === "password" ? (
    // Password field with show/hide toggle
    <main className="grid space-y-1">
      <label className="label">{title}</label>
      <div className="join">
        <div className="w-full">
          <label className="input validator join-item">
            <Key size={16} />
            <input
              type={showPassword ? "text" : "password"}
              required={required}
              placeholder={title}
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
        </div>
        <button
          className={twMerge(
            "btn join-item border-neutral rounded-e-lg border-y-1 border-e-1",
            theme === "light" && "border-neutral/30",
          )}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </main>
  ) : (
    // For text, email, etc.
    <main className="space-y-1">
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
    </main>
  );
}

export default CustomInput;
