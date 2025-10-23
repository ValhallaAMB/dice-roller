import PasswordInput from "@components/common/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserStore from "@stores/useUserStore";
import { useForm } from "react-hook-form";
import {
  ChangePasswordSchema,
  type ChangePasswordForm,
} from "schemas/ChangePasswordSchema";

function ChangePassword() {
  const { loading, error, changePassword } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ChangePasswordForm>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const submitHandler = async (data: ChangePasswordForm) => {
    const success = await changePassword(data.oldPassword, data.newPassword);
    if (success) reset();
  };

  return (
    <main className="hero">
      <div className="hero-content flex-col gap-0.5 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Change your password</h1>
          <p className="py-4 text-start">
            Ensure you use a long, random password to stay secure.
            <br />
            <span className="text-neutral-content text-sm">
              <span className="font-bold">Your password should: </span>
              <br />
              1. Be at least 8 characters.
              <br />
              2. Include at least 1 uppercase letter.
              <br />
              3. Include at least 1 lowercase letter.
              <br />
              4. Include at least 1 number.
              <br />
              5. Include at least 1 special character (e.g. !@#$%^&*).
            </span>
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <div className="card-body">
            {/* ERROR MESSAGE  */}
            {error && <label className="alert alert-error mb-2">{error}</label>}
            <form
              onSubmit={handleSubmit(submitHandler)}
              className="space-y-2 [&>*]:w-full"
            >
              <PasswordInput<ChangePasswordForm>
                title="Old Password"
                placeholder="Stinky old password"
                name="oldPassword"
                register={register}
                error={errors.oldPassword?.message}
              />

              <PasswordInput<ChangePasswordForm>
                title="New Password"
                placeholder="Awesome new password"
                name="newPassword"
                register={register}
                error={errors.newPassword?.message}
              />

              <PasswordInput<ChangePasswordForm>
                title="Confirm New Password"
                placeholder="Confirm awesome new password"
                name="confirmNewPassword"
                register={register}
                error={errors.confirmNewPassword?.message}
              />

              <button
                className="btn btn-primary mx-auto mt-2 block max-w-6/12"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="loading loading-spinner loading-sm" />
                ) : (
                  "Change Password"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;
