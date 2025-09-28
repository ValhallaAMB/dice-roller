import { Eye, EyeOff, Key } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useThemeStore from "store/useThemeStore";
import { useState } from "react";

type Props = {
  required?: boolean;
  title: string;
};

function CustomPasswordField({ required, title }: Props) {
  const { theme } = useThemeStore();
  const [showPassword, setShowPassword] = useState(false);

  return (
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
  );
}

export default CustomPasswordField;
