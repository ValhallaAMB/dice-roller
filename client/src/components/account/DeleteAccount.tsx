import NotificationModal from "@components/common/NotificationModal";
import useUserStore from "@stores/useUserStore";
import { Suspense, useRef } from "react";
import { useNavigate } from "react-router";
import type { ModalHandler } from "types/Modal";

function DeleteAccount() {
  const modalRef = useRef<ModalHandler>(null);
  const { deleteAccount } = useUserStore();
  const navigate = useNavigate();

  const openDeleteModal = () => {
    modalRef.current?.openModal();
  };

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Delete Account</h1>
          <p className="py-3">
            Are you sure you want to delete your account?
            <br />
            All data will be lost. This action cannot be undone.
          </p>
          <button className="btn btn-error" onClick={openDeleteModal}>Delete Account</button>
        </div>
      </div>

      <Suspense fallback={null}>
        <NotificationModal
          id="delete-account-modal"          
          title="Delete Account"
          message={`Are you sure you want to delete your account? All data will be lost. This action cannot be undone.`}
          ref={modalRef}
          twBtnStyle="btn-error"
          // provide proper function depending on mode
          func={async () => {
            // Call delete account function from user store
            const success = await deleteAccount();
            if (success) navigate("/");
          }}
        />
      </Suspense>
    </div>
  );
}

export default DeleteAccount;
