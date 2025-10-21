import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useUserStore from "@stores/useUserStore";
import { ImagePlus, Mail, User } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ProfileEditSchema,
  type ProfileEditForm,
} from "schemas/ProfileEditSchema";

type Props = {};

function EditAccount({}: Props) {
  const { user } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileEditForm>({
    resolver: zodResolver(ProfileEditSchema),
  });

  const submitHandler = async (data: ProfileEditForm) => {
    const userData = {
      username: data.username,
      email: data.email,
      pfpBase64: data.pfp,
    };

    console.log(userData);
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
              <img src={user.pfpBase64} />
            ) : (
              <ImagePlus size={128} className="mt-2 w-36" />
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex-auto space-y-2 [&>*]:w-full"
        >
          <p className="mb-1">Profile Picture</p>
          <input type="file" className="file-input" {...register("pfp")} />
          {errors.pfp && (
            <p className="text-error text-xs">{errors.pfp.message}</p>
          )}

          <TextInput<ProfileEditForm>
            title="Username"
            name="username"
            Icon={User}
            placeholder="Username"
            register={register}
            error={errors.username?.message}
          />

          <TextInput<ProfileEditForm>
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
    </main>
  );
}

export default EditAccount;
