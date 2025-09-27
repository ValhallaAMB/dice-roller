import { FileUser, LogIn, Mail } from "lucide-react";
import { createPortal } from "react-dom";
import CustomInput from "./CustomInput";
import useThemeStore from "../../store/useThemeStore";

type Props = {
  id: string;
  title: string;
  message: string;
  func?: () => void;
};

function InputModal({ id, title, message, func }: Props) {
  const { theme } = useThemeStore();

  const openDialog = () => {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    dialog.hidden = false;
    dialog.showModal();
  };

  const closeDialog = () => {
    const dialog = document.getElementById(id) as HTMLDialogElement;
    dialog.hidden = true;
    dialog.close();
  };

  const onConfirm = () => {
    func && func();
    closeDialog();
  };

  return (
    <>
      <button className="w-max" onClick={() => openDialog()}>
        <LogIn size={16} />
        {title}
      </button>

      {createPortal(
        <dialog
          id={id}
          className="modal modal-bottom sm:modal-middle"
          data-theme={theme}
        >
          <div className="bg-base-200 text-base-content rounded-xl px-5 pt-1 pb-5">
            <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4 text-sm">
              <legend className="fieldset-legend flex text-2xl">
                Sign Up
                <button
                  className="btn btn-sm btn-circle btn-neutral relative left-40"
                  onClick={closeDialog}
                >
                  ✕
                </button>
              </legend>

              <p className="text-sm">{message}</p>

              <CustomInput
                title="Username"
                type="text"
                placeholder="amazing username"
                Icon={FileUser}
                required={true}
                invalidHint="Username is required"
              />

              <CustomInput
                title="Email"
                type="email"
                placeholder="amazing@email.com"
                Icon={Mail}
                required={true}
                invalidHint="Email is required"
              />

              <button className="btn btn-primary mt-1" onClick={onConfirm}>
                Sign Up
              </button>
            </fieldset>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}

export default InputModal;
