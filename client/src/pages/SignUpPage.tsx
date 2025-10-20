import FormLayout from "@components/common/FormLayout";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpForm } from "schemas/SignUpSchema";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const { loading, error, registerUser } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
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
