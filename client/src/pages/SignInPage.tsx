import FormLayout from "@components/common/FormLayout";
import PasswordInput from "@components/common/PasswordInput";
import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SignInSchema, type SignInForm } from "schemas/SignInSchema";

function SignInPage() {
  const { loading, error, logIn } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(SignInSchema),
  });

  const submitHandler = async (data: SignInForm) => {
    const success = await logIn(data);
    if (success) navigate("/");
  };

  return (
    <FormLayout title="Sign In" label="Please enter your details" error={error}>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
        <TextInput<SignInForm>
          title="Email"
          Icon={Mail}
          placeholder="awesome@email.com"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <PasswordInput<SignInForm>
          title="Password"
          placeholder="Awesome password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <p className="text-center">
          Forgot your password?{" "}
          <Link className="text-blue-400" to="/forgot-password">
            Reset Password
          </Link>
        </p>

        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-400" to="/signup">
            Sign Up
          </Link>
        </p>

        <button
          className="btn btn-primary mx-auto mt-1.5 block w-6/12"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="loading loading-spinner loading-sm" />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </FormLayout>
  );
}

export default SignInPage;
