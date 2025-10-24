import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { ImagePlus, Mail, User } from "lucide-react";
import { Suspense, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  AccountEditSchema,
  type AccountEditForm,
} from "schemas/AccountEditSchema";
import type { ModalHandler } from "types/Modal";
import ConfirmUpdateAccountModal from "./ConfirmUpdateAccountModal";

type Props = {};

function EditAccount({}: Props) {
  const { error, user, updateUser } = useUserStore();
  const modalRef = useRef<ModalHandler>(null);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<AccountEditForm>({
    resolver: zodResolver(AccountEditSchema),
  });

  const submitHandler = async (data: AccountEditForm) => {
    const popModal = await updateUser(data);
    if (popModal) modalRef.current?.openModal();
  };

  useEffect(() => {
    reset({
      username: user?.username ?? "",
      email: user?.email ?? "",
      pfp: "",
    });
  }, [user]);

  return (
    <main>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Edit your awesome account</h1>
            <p className="text-neutral-content py-3">
              Make changes to your account information below.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="avatar mb-2 flex-2/12 justify-center">
          <div className="w-36 rounded-full">
            {user?.pfpBase64 ? (
              <img className="mask mask-hexagon-2" src={user.pfpBase64} />
            ) : (
              <ImagePlus size={128} className="mt-2 w-36" />
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex-auto space-y-2 [&>*]:w-full"
        >
          {/* ERROR MESSAGE  */}
          {error && <label className="alert alert-error mb-2">{error}</label>}

          <p className="mb-1">Profile Picture</p>
          <input type="file" className="file-input" {...register("pfp")} />
          {errors.pfp && (
            <p className="text-error text-xs">{errors.pfp.message}</p>
          )}

          <TextInput<AccountEditForm>
            title="Username"
            name="username"
            Icon={User}
            placeholder="Username"
            register={register}
            error={errors.username?.message}
          />

          <TextInput<AccountEditForm>
            title="Email"
            name="email"
            Icon={Mail}
            type="email"
            placeholder="Email"
            register={register}
            error={errors.email?.message}
          />

          <button
            className="btn btn-primary mx-auto mt-1 block max-w-6/12"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
      <Suspense fallback={null}>
        <ConfirmUpdateAccountModal
          id="confirm-update-account-modal"
          title="Confirm Update"
          message={`An email will be sent to ${getValues("email")} to verify these changes. Please enter the verification code.`}
          ref={modalRef}
          twBtnStyle="btn-primary"
          varValue={getValues("email")}
        />
      </Suspense>
    </main>
  );
}

export default EditAccount;
