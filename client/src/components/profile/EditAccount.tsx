import { zodResolver } from "@hookform/resolvers/zod/src/index.js";
import useAuthStore from "@stores/useAuthStore";
import { ImagePlus, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  ProfileEditSchema,
  type ProfileEditForm,
} from "schemas/ProfileEditSchema";

type Props = {};

function EditAccount({}: Props) {
  const { user } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileEditForm>({
    resolver: zodResolver(ProfileEditSchema),
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
  });

  const submitHandler = async (data: ProfileEditForm) => {
    const userData = {
      username: data.username,
      email: data.email,
      pfpBase64: data.pfp,
    };

    console.log(userData);
    reset({
      pfp: "",
    });
  };

  return (
    <main>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">Edit your awesome account</h1>
            <p className="py-3 text-neutral-content">
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
