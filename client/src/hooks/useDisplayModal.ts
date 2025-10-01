import { useRef, useImperativeHandle, type Ref } from "react";
import type { ModalHandler } from "types/Modal";

export default function useDisplayModal(ref: Ref<ModalHandler>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        if (!modalRef.current) return;
        modalRef.current.hidden = false;
        modalRef.current.showModal();
      },
      closeModal: () => {
        if (!modalRef.current) return;
        modalRef.current.hidden = true;
        modalRef.current.close();
      },
    }),
    [],
  );

  return modalRef;
}
