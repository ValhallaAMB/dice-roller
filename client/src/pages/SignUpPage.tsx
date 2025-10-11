import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useAuthStore from "@stores/useAuthStore";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpForm } from "schemas/SignUpSchema";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const { loading, error, signUp } = useAuthStore();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const submitHandler = async (data: SignUpForm) => {
    await signUp(data);
    if (!error) return;
    reset();
    navigate("/confirm-signup");
  };

  return (
    <FormLayout title="Sign Up" label="Please enter your details" error={error}>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
        <p className="mb-1">Username</p>
        <section className="input">
          <User size={16} />
          <input
            placeholder="Username"
            type="text"
            {...register("username")}
            required
          />
        </section>
        {errors.username && (
          <p className="text-error text-xs">{errors.username?.message}</p>
        )}

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

        <p className="mb-1">Password</p>
        <section className="input">
          <Key size={16} />
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            required
          />
          <button
            type="button"
            className="-m-2 cursor-pointer p-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </section>
        {errors.password && (
          <p className="text-error text-xs">{errors.password?.message}</p>
        )}

        <p className="text-center">
          Already have an account?{" "}
          <span className="cursor-pointer text-blue-400">Sign In</span>
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
