import { useEffect } from "react";
import {
  useForm,
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
  type DefaultValues,
} from "react-hook-form";
import useUserStore from "@stores/useUserStore";
import type { User } from "types/User";

type Options<T extends FieldValues> = {
  mapUserToDefaults: (user: User) => DefaultValues<T>;
  formOptions?: UseFormProps<T>;
};

function useFormWithUserDefaults<T extends FieldValues>({
  mapUserToDefaults,
  formOptions,
}: Options<T>): UseFormReturn<T> {
  const user = useUserStore((s) => s.user);
  const methods = useForm<T>(formOptions);

  useEffect(() => {
    // Reset whenever user becomes available or updates
    methods.reset(mapUserToDefaults(user ? user : {}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return methods;
}

export default useFormWithUserDefaults;

// IMPLEMENTATION EXAMPLE:
/*
const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormWithUserDefaults<AccountEditForm>({
    formOptions: {
      resolver: zodResolver(AccountEditSchema),
    },
    mapUserToDefaults: (user) => ({
      username: user?.username ?? "",
      email: user?.email ?? "",
      pfp: "",
    }),
  });
*/
