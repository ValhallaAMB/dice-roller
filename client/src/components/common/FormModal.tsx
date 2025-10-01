import useThemeStore from "@stores/useThemeStore";
import type { ModalHandler } from "types/Modal";
import { forwardRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import useDisplayModal from "hooks/useDisplayModal";

type Props = {
  id: string;
  title: string;
  message: string;
  children?: ReactNode;
};

const FormModal = forwardRef<ModalHandler, Props>(
  ({ id, title, message, children }, ref) => {
    const { theme } = useThemeStore();
    const modalRef = useDisplayModal(ref);

    return createPortal(
      <dialog
        id={id}
        className="modal modal-bottom sm:modal-middle"
        data-theme={theme}
        ref={modalRef}
      >
        <div className="bg-base-200 text-base-content rounded-xl px-5 pt-1 pb-5">
          <fieldset className="fieldset bg-base-100 border-base-content/10 rounded-box w-xs space-y-1 border p-4 text-sm">
            <legend className="fieldset-legend text-2xl">{title}</legend>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-neutral relative bottom-13 left-63 -mb-8"
              onClick={() => {
                if (!modalRef.current) return;
                modalRef.current.hidden = true;
                modalRef.current.close();
              }}
            >
              ✕
            </button>

            {/* ERROR MESSAGE */}
            {/* {error && <div className="alert alert-error mb-2">{error}</div>} */}

            <p className="text-sm">{message}</p>

            {/* CHILDREN */}
            {children}
          </fieldset>
        </div>
      </dialog>,
      document.body,
    );
  },
);

export default FormModal;
