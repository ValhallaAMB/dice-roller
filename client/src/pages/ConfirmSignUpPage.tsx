import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@stores/useAuthStore";
import { Hash, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ConfirmSignUpSchema,
  type ConfirmSignUpForm,
} from "schemas/ConfirmSignUpSchema";

function ConfirmSignUpPage() {
  const { loading, error, user, confirmRegister } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmSignUpForm>({
    resolver: zodResolver(ConfirmSignUpSchema),
    defaultValues: {
      email: user?.email || "",
    },
  });

  const submitHandler = async (data: ConfirmSignUpForm) => {
    const success = await confirmRegister(data.email, data.code);
    if (success) navigate("/signin");
  };

  return (
    <FormLayout
      title="Confirm Sign Up"
      label={`A confirmation code has been sent to your email. \nPlease enter the code to verify your account.`}
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

export default ConfirmSignUpPage;
