import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpForm } from "schemas/SignUpSchema";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "@components/common/PasswordInput";
import TextInput from "@components/common/TextInput";

function SignUpPage() {
  const { loading, error, registerUser } = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const submitHandler = async (data: SignUpForm) => {
    const success = await registerUser(data);
    if (success) navigate("/confirm-signup");
  };

  return (
    <FormLayout title="Sign Up" label="Please enter your details" error={error}>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
        <TextInput<SignUpForm>
          title="Username"
          Icon={User}
          placeholder="Awesome username"
          type="text"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <TextInput<SignUpForm>
          title="Email"
          Icon={Mail}
          placeholder="awesome@email.com"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <PasswordInput<SignUpForm>
          title="Password"
          placeholder="Awesome password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <PasswordInput<SignUpForm>
          title="Confirm Password"
          placeholder="Confirm awesome password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
        />

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-400" to="/signin">
            Sign In
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
            "Sign Up"
          )}
        </button>
      </form>
    </FormLayout>
  );
}

export default SignUpPage;
