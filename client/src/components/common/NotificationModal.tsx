import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import useThemeStore from "@stores/useThemeStore";
import { forwardRef } from "react";
import useDisplayModal from "hooks/useDisplayModal";
import type { ModalHandler } from "types/Modal";

type Props = {
  id: string;
  title: string;
  message: string;
  twBtnStyle: string;
  func?: () => void;
};

const NotificationModal = forwardRef<ModalHandler, Props>(
  ({ id, title, message, twBtnStyle, func }, ref) => {
    const { theme } = useThemeStore();
    const modalRef = useDisplayModal(ref);

    const onConfirm = () => {
      func && func();
      modalRef.current!.hidden = true;
      modalRef.current!.close();
    };

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
                onClick={() => {
                  modalRef.current!.hidden = true;
                  modalRef.current!.close();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>,
      document.body,
    );
  },
);

export default NotificationModal;
