import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Key } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChangePasswordSchema,
  type ChangePasswordForm,
} from "schemas/ChangePasswordSchema";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const submitHandler = async (data: ChangePasswordForm) => {
    const passwordData = {
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    console.log(passwordData);
    reset();
  };

  return (
    <main className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse gap-0.5">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Change your password</h1>
          <p className="py-4 text-start">
            Ensure you use a long, random password to stay secure.
            <br />
            <span className="text-neutral-content text-sm">
              <span className="font-bold">Your password should: </span>
              <br />
              1. Be at least 8 characters.
              <br />
              2. Include at least 1 uppercase letter.
              <br />
              3. Include at least 1 lowercase letter.
              <br />
              4. Include at least 1 number.
              <br />
              5. Include at least 1 special character (e.g. !@#$%^&*).
            </span>
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <div className="card-body">
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
              <p className="mb-1">Password</p>
              <div className="input">
                <Key size={16} />
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-error text-xs">{errors.password.message}</p>
              )}

              <p className="mb-1">Confirm Password</p>
              <div className="input">
                <Key size={16} />
                <input
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-error text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button
                className="btn btn-outline mx-auto mt-2 block"
                type="button"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;
