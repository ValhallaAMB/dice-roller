import { type RefObject, useEffect } from "react";
import type { ModalHandler } from "types/Modal";

type Props = {
  modalId: string;
  modalRef: RefObject<ModalHandler | null>;
};

export default function useSwitchModal({ modalId, modalRef }: Props) {
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail === modalId) {
        modalRef.current?.openModal();
      }
    };

    window.addEventListener("open-modal", handler);

    return () => window.removeEventListener("open-modal", handler);
  }, []);
}
