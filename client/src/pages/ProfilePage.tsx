import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ProfilePage() {
  const { loading } = useUserStore();
  const [togglePassword, setTogglePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: zodResolver(),
  });

  const submitHandler = async (data: any) => {
    const user = {};
    // await login(user);
    console.log(user);
    // reset();
  };

  return (
    <main className="mt-7 grid place-items-center">
      <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4 [&>*]:text-sm">
        <legend className="fieldset-legend">Profile Page</legend>

        <div className="avatar mb-2 justify-center">
          <div className="w-32 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
          <p className="mb-1">Profile Picture</p>
          <section className="input">
            <input
              placeholder="Profile Picture"
              type="file"
              {...register("profilePicture")}
            />
          </section>
          {errors.profilePicture && <p className="text-error text-xs">{}</p>}

          <p className="mb-1">Username</p>
          <section className="input">
            <User size={16} />
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
          </section>
          {errors.username && <p className="text-error text-xs">{}</p>}

          <p className="mb-1">Email</p>
          <section className="input">
            <Mail size={16} />
            <input placeholder="Email" type="email" {...register("email")} />
          </section>
          {errors.email && <p className="text-error text-xs">{}</p>}

          <button
            className="btn btn-outline"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            Change Password
          </button>

          {togglePassword && (
            <>
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

              <p className="mb-1">Confirm Password</p>
              <section className="input">
                <Key size={16} />
                <input
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword")}
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
            </>
          )}

          <button
            className="btn btn-primary mt-1"
            type="submit"
            disabled={loading}
          >
            save
          </button>
        </form>
      </fieldset>
    </main>
  );
}

export default ProfilePage;
