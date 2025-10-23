import TextInput from "@components/common/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import useThemeStore from "@stores/useThemeStore";
import useUserStore from "@stores/useUserStore";
import useDisplayModal from "hooks/useDisplayModal";
import { Hash, Mail } from "lucide-react";
import { forwardRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ConfirmInfoSchema,
  type ConfirmInfoForm,
} from "schemas/ConfirmInfoSchema";
import { twMerge } from "tailwind-merge";
import type { ModalHandler } from "types/Modal";

type Props = {
  id: string;
  title: string;
  message: string;
  twBtnStyle: string;
  varValue?: string;
};

const ConfirmUpdateAccountModal = forwardRef<ModalHandler, Props>(
  ({ id, title, message, twBtnStyle, varValue }, ref) => {
    const { theme } = useThemeStore();
    const modalRef = useDisplayModal(ref);
    const { error, confirmUpdateUser } = useUserStore();
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<ConfirmInfoForm>({
      resolver: zodResolver(ConfirmInfoSchema),
    });

    const modalHandler = () => {
      modalRef.current!.hidden = true;
      modalRef.current!.close();
      reset();
    };

    const submitHandler = async (data: ConfirmInfoForm) => {
      const success = await confirmUpdateUser(data.code);
      if (success) {
        modalHandler();
        navigate("/signin");
      }
    };

    useEffect(() => {
      reset({
        email: varValue ?? "",
      });
    }, [varValue]);

    return createPortal(
      <dialog
        id={id}
        className="modal modal-bottom sm:modal-middle"
        data-theme={theme}
        ref={modalRef}
      >
        <div className="modal-box bg-base-200 text-base-content shadow">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          {/* Close the modal manually */}
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="grid place-content-center space-y-2 [&>*]:w-xs"
          >
            {/* ERROR MESSAGE  */}
            {error && <label className="alert alert-error mb-2">{error}</label>}

            <TextInput<ConfirmInfoForm>
              title="Email"
              Icon={Mail}
              placeholder="Email"
              type="email"
              name="email"
              disabled={true}
              register={register}
              error={errors.email?.message}
            />

            <TextInput<ConfirmInfoForm>
              title="Confirmation Code"
              Icon={Hash}
              placeholder="######"
              type="number"
              name="code"
              register={register}
              error={errors.code?.message}
            />

            <div className="modal-action">
              <button type="submit" className={twMerge("btn", twBtnStyle)}>
                Confirm
              </button>

              <button
                type="button"
                className="btn btn-ghost"
                onClick={modalHandler}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>,
      document.body,
    );
  },
);

export default ConfirmUpdateAccountModal;
