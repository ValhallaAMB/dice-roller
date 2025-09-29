import FormModal from "@components/common/FormModal";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Mail, User, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpData } from "schemas/SignUpSchema";
import type { UserWithoutId } from "types/User";
import { useRef } from "react";
import type { ModalHandle } from "types/Modal";

function SignUpModal() {
  const { loading = false, createUser } = useUserStore();
  const modalRef = useRef<ModalHandle>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchema),
  });

  const submitHandler = async (data: SignUpData) => {
    const user: UserWithoutId = {
      username: data.username,
      email: data.email,
      pfpBase64: null,
    };
    await createUser(user);
    modalRef.current?.closeModal();
    reset();
  };

  return (
    <>
      <FormModal
        id="signup-modal"
        Icon={UserPlus}
        title="Sign Up"
        message="Please enter your details"
        ref={modalRef}
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
