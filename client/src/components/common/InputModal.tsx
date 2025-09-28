import { createPortal } from "react-dom";
import CustomInput from "./CustomInput";
import useThemeStore from "@store/useThemeStore";

type Field = {
  name?: string;
  title: string;
  type: string;
  placeholder?: string;
  Icon?: any; 
  required?: boolean;
  invalidHint?: string;
};

type Props = {
  id: string;
  title: string;
  message: string;
  fields?: Field[]; // configurable input fields
  confirmLabel?: string;
  onConfirm?: () => void;
};

function InputModal({
  id,
  title,
  message,
  fields = [],
  confirmLabel = "Confirm",
  onConfirm,
}: Props) {
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

  const handleConfirm = () => {
    onConfirm && onConfirm();
    closeDialog();
  };

  return (
    <>
      <button className="w-max" onClick={openDialog}>
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
                {title}
                <button
                  className="btn btn-sm btn-circle btn-neutral relative left-40"
                  onClick={closeDialog}
                >
                  ✕
                </button>
              </legend>

              <p className="text-sm">{message}</p>

              {/* render configured inputs */}
              {fields.map((f, idx) => (
                <CustomInput
                  key={idx}
                  title={f.title}
                  type={f.type}
                  placeholder={f.placeholder!}
                  Icon={f.Icon}
                  required={f.required!}
                  invalidHint={f.invalidHint}
                />
              ))}

              <div className="mt-2 flex gap-2">
                <button className="btn btn-ghost" onClick={closeDialog}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleConfirm}>
                  {confirmLabel}
                </button>
              </div>
            </fieldset>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}

export default InputModal;
