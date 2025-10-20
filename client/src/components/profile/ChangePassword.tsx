import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@stores/useAuthStore";
import { Eye, EyeOff, Key } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChangePasswordSchema,
  type ChangePasswordForm,
} from "schemas/ChangePasswordSchema";

function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const { error, changePassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const submitHandler = async (data: ChangePasswordForm) => {
    const success = await changePassword(data.oldPassword, data.newPassword);
    if (success) reset();
  };

  return (
    <main className="hero">
      <div className="hero-content flex-col gap-0.5 lg:flex-row-reverse">
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
            {/* ERROR MESSAGE  */}
            {error && <label className="alert alert-error mb-2">{error}</label>}
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="space-y-2 [&>*]:w-full"
            >
              <p className="mb-1">Old Password</p>
              <div className="input">
                <Key size={16} />
                <input
                  placeholder="Stinky old password"
                  type={showPassword ? "text" : "password"}
                  {...register("oldPassword")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.oldPassword && (
                <p className="text-error text-xs">
                  {errors.oldPassword.message}
                </p>
              )}

              <p className="mb-1">New Password</p>
              <div className="input">
                <Key size={16} />
                <input
                  placeholder="Awesome new password"
                  type={showPassword ? "text" : "password"}
                  {...register("newPassword")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-error text-xs">
                  {errors.newPassword.message}
                </p>
              )}

              <p className="mb-1">Confirm New Password</p>
              <div className="input">
                <Key size={16} />
                <input
                  placeholder="Confirm awesome new password"
                  type={showPassword ? "text" : "password"}
                  {...register("newConfirmPassword")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.newConfirmPassword && (
                <p className="text-error text-xs">
                  {errors.newConfirmPassword.message}
                </p>
              )}

              <button
                className="btn btn-primary mx-auto mt-2 block max-w-6/12"
                type="submit"
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
