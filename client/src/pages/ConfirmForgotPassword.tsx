import FormLayout from "@components/common/FormLayout";
import PasswordInput from "@components/common/PasswordInput";
import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Key, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  ConfirmForgotPasswordSchema,
  type ConfirmForgotPasswordForm,
} from "schemas/ConfirmForgotPasswordSchema";

function ConfirmForgotPassword() {
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
        <TextInput<ConfirmForgotPasswordForm>
          title="Email"
          Icon={Mail}
          placeholder="Email"
          type="email"
          name="email"
          disabled={true}
          register={register}
          error={errors.email?.message}
        />

        <TextInput<ConfirmForgotPasswordForm>
          title="Confirmation Code"
          Icon={Key}
          placeholder="######"
          type="number"
          name="code"
          register={register}
          error={errors.code?.message}
        />

        <PasswordInput<ConfirmForgotPasswordForm>
          title="New Password"
          placeholder="Awesome new password"
          name="newPassword"
          register={register}
          error={errors.newPassword?.message}
        />

        <PasswordInput<ConfirmForgotPasswordForm>
          title="Confirm New Password"
          placeholder="Confirm awesome new password"
          name="confirmNewPassword"
          register={register}
          error={errors.confirmNewPassword?.message}
        />

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
