import useThemeStore from "@stores/useThemeStore";
import type { ModalHandle } from "types/Modal";
import type { LucideIcon } from "lucide-react";
import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  id: string;
  Icon: LucideIcon;
  title: string;
  message: string;
  isClosed?: boolean;
  children?: ReactNode;
};

const FormModal = forwardRef<ModalHandle, Props>(
  ({ id, Icon, title, message, children }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(
      ref,
      () => ({
        openModal: () => {
          modalRef.current!.hidden = false;
          modalRef.current?.showModal();
        },
        closeModal: () => {
          modalRef.current!.hidden = true;
          modalRef.current?.close();
        },
      }),
      [],
    );

    const { theme } = useThemeStore();

    return (
      <>
        <button
          className="min-w-max"
          onClick={() => {
            modalRef.current!.hidden = false;
            modalRef.current?.showModal();
          }}
        >
          {Icon && <Icon size={16} />}
          {title}
        </button>

        {createPortal(
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
                    modalRef.current!.hidden = true;
                    modalRef.current?.close();
                  }}
                >
                  ✕
                </button>

                {/* ERROR MESSAGE */}
                {/* {error && <div className="alert alert-error mb-2">{error}</div>} */}

                <p className="text-sm">{message}</p>

                {children}
              </fieldset>
            </div>
          </dialog>,
          document.body,
        )}
      </>
    );
  },
);

export default FormModal;
