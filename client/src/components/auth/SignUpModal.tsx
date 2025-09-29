import FormModal from "@components/common/FormModal";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Mail, User, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpData } from "@schemas/SignUpSchema";
import type { userWithoutId } from "types/User";
import { useEffect, useState } from "react";

function SignUpModal() {
  const { loading = false, createUser } = useUserStore();
  const [isClosed, setIsClosed] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  const submitHandler = (data: SignUpData) => {
    const user: userWithoutId = {
      username: data.username,
      email: data.email,
      pfpBase64: null,
    };
    createUser(user);
    setIsClosed(true);
    reset();
  };

  useEffect(() => {
    setIsClosed(false);
  }, [isClosed]);

  return (
    <>
      <FormModal
        id="signup-modal"
        Icon={UserPlus}
        title="Sign Up"
        message="Please enter your details"
        isClosed={isClosed}
      >
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
      </FormModal>
    </>
  );
}

export default SignUpModal;
