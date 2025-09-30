import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { Eye, EyeOff, Key, Mail, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ProfileEditSchema,
  type ProfileEditForm,
} from "schemas/ProfileEditSchema";

function ProfilePage() {
  const { loading } = useUserStore();
  const [togglePassword, setTogglePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileEditForm>({
    resolver: zodResolver(ProfileEditSchema),
  });

  const submitHandler = async (data: ProfileEditForm) => {
    const user = {
      username: data.username,
      email: data.email,
      pfpBase64: data.pfp,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // await login(user);
    console.log(user);
    reset({
      pfp: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <main className="mt-7 grid place-items-center">
      <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4">
        <legend className="fieldset-legend text-xl">{"Name"}'s Profile</legend>

        <div className="avatar mb-2 justify-center">
          <div className="w-32 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
          <p className="mb-1">Profile Picture</p>
          <input type="file" className="file-input" {...register("pfp")} />
          {errors.pfp && (
            <p className="text-error text-xs">{errors.pfp.message}</p>
          )}

          <p className="mb-1">Username</p>
          <section className="input">
            <User size={16} />
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
          </section>
          {errors.username && (
            <p className="text-error text-xs">{errors.username.message}</p>
          )}

          <p className="mb-1">Email</p>
          <section className="input">
            <Mail size={16} />
            <input placeholder="Email" type="email" {...register("email")} />
          </section>
          {errors.email && (
            <p className="text-error text-xs">{errors.email.message}</p>
          )}

          <button
            className="btn btn-outline mx-auto block w-8/12"
            type="button"
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
                <p className="text-error text-xs">{errors.password.message}</p>
              )}

              <p className="mb-1">Confirm Password</p>
              <section className="input">
                <Key size={16} />
                <input
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  className="-m-2 cursor-pointer p-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </section>
              {errors.confirmPassword && (
                <p className="text-error text-xs">
                  {errors.confirmPassword.message}
                </p>
              )}
            </>
          )}

          <button
            className="btn btn-primary mx-auto block w-8/12"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </fieldset>
    </main>
  );
}

export default ProfilePage;
