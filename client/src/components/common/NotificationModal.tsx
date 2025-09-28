import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import useThemeStore from "store/useThemeStore";

type Props = {
  id: string;
  name: string;
  title: string;
  message: string;
  twBtnStyle: string;
  func?: () => void;
};

export default function NotificationModal({
  id,
  name,
  title,
  message,
  twBtnStyle,
  func,
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

  const onConfirm = () => {
    func && func();
    closeDialog();
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-error btn-sm" onClick={openDialog}>
        {title}
      </button>

      {createPortal(
        <dialog
          id={id}
          className="modal modal-bottom sm:modal-middle"
          data-theme={theme}
        >
          <div className="modal-box bg-base-200 text-base-content">
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="py-4">{message}</p>
            <div className="modal-action">
              {/* Close the modal manually */}
              <form method="dialog" className="space-x-2">
                <button
                  type="button"
                  className={twMerge("btn", twBtnStyle)}
                  onClick={onConfirm}
                >
                  Confirm
                </button>

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={closeDialog}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>,
        document.body,
      )}
    </>
  );
}
