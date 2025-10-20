import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Eye, EyeOff, Hash, Key, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  ConfirmForgotPasswordSchema,
  type ConfirmForgotPasswordForm,
} from "schemas/ConfirmForgotPasswordSchema";

function ConfirmForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, user, confirmForgotPassword } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmForgotPasswordForm>({
    resolver: zodResolver(ConfirmForgotPasswordSchema),
    defaultValues: {
      email: user?.email || "",
    },
  });

  const submitHandler = async (data: ConfirmForgotPasswordForm) => {
    const success = await confirmForgotPassword(data);
    if (success) navigate("/signin");
  };

  return (
    <FormLayout
      title="Confirm Password Reset"
      label="If this email exists, a password reset code has been sent to your email."
      error={error}
    >
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
        <p className="mb-1">Email</p>
        <section className="input">
          <Mail size={16} />
          <input
            placeholder="Email"
            type="email"
            {...register("email")}
            required
            disabled
          />
        </section>

        <p className="mb-1">Confirmation Code</p>
        <section className="input">
          <Hash size={16} />
          <input
            placeholder="Code"
            type="number"
            {...register("code")}
            required
          />
        </section>
        {errors.code && (
          <p className="text-error text-xs">{errors.code?.message}</p>
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
          <p className="text-error text-xs">{errors.newPassword.message}</p>
        )}

        <p className="mb-1">Confirm New Password</p>
        <div className="input">
          <Key size={16} />
          <input
            placeholder="Confirm awesome new password"
            type={showPassword ? "text" : "password"}
            {...register("confirmNewPassword")}
          />
          <button
            type="button"
            className="-m-2 cursor-pointer p-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {errors.confirmNewPassword && (
          <p className="text-error text-xs">
            {errors.confirmNewPassword.message}
          </p>
        )}

        <button
          className="btn btn-primary mx-auto mt-1.5 block w-6/12"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="loading loading-spinner loading-sm" />
          ) : (
            "Confirm Sign Up"
          )}
        </button>
      </form>
    </FormLayout>
  );
}

export default ConfirmForgotPassword;
