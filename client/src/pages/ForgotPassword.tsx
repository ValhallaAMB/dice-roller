import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordSchema, type ForgotPasswordForm } from "schemas/ForgotPasswordSchema";


function ForgotPassword() {
  const { loading, error, forgotPassword } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const submitHandler = async (data: ForgotPasswordForm) => {
    const success = await forgotPassword(data.email);
    if (success) navigate("/confirm-forgot-password");
  };

  return (
    <FormLayout
      title="Forgot Password"
      label="Please enter your email to restore your password"
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
          />
        </section>
        {errors.email && (
          <p className="text-error text-xs">{errors.email?.message}</p>
        )}

        <button
          className="btn btn-primary mx-auto mt-1.5 block w-6/12"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="loading loading-spinner loading-sm" />
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </FormLayout>
  );
}

export default ForgotPassword;
