import FormLayout from "@components/common/FormLayout";
import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Hash, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  ConfirmSignUpSchema,
  type ConfirmSignUpForm,
} from "schemas/ConfirmSignUpSchema";

function ConfirmSignUpPage() {
  const { loading, error, user, confirmRegister } = useUserStore();
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
        <TextInput<ConfirmSignUpForm>
          title="Email"
          Icon={Mail}
          placeholder="Email"
          type="email"
          name="email"
          disabled={true}
          register={register}
          error={errors.email?.message}
        />

        <TextInput<ConfirmSignUpForm>
          title="Confirmation Code"
          Icon={Hash}
          placeholder="######"
          type="number"
          name="code"
          register={register}
          error={errors.code?.message}
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

export default ConfirmSignUpPage;
