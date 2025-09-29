import FormModal from "@components/common/FormModal";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { Eye, EyeOff, Key, LogIn, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, type LoginData } from "schemas/LoginSchema";
import type { ModalHandle } from "types/Modal";
import type { UserLogin } from "types/User";

type Props = {};

function LoginModal({}: Props) {
  const { loading } = useUserStore();
  const [showPassword, setShowPassword] = useState(false);
  const modalRef = useRef<ModalHandle>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const submitHandler = async (data: LoginData) => {
    const user: UserLogin = {
      email: data.email,
      password: data.password,
    };
    // await login(user);
    console.log(user);
    modalRef.current?.closeModal();
    reset();
  };

  return (
    <>
      <FormModal
        id="login-modal"
        Icon={LogIn}
        title="Log In"
        message="Please enter your credentials"
        ref={modalRef}
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

          <button
            className="btn btn-primary mx-auto mt-1.5 block w-6/12"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="loading loading-spinner loading-sm" />
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </FormModal>
    </>
  );
}

export default LoginModal;
