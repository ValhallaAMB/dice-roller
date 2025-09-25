import { twMerge } from "tailwind-merge";

type Props = {
  id: string;
  name: string;
  title: string;
  message: string;
  twBtnStyle: string;
  func?: () => void;
};

export default function CustomModal({
  id,
  name,
  title,
  message,
  twBtnStyle,
  func,
}: Props) {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-error btn-sm"
        onClick={() => {
          const dialog = document.getElementById(id) as HTMLDialogElement;
          dialog.hidden = false;
          dialog.showModal();
        }}
      >
        {title}
      </button>
      <dialog id={id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            {/* Close the modal manually */}
            <form method="dialog" className="space-x-2">
              <button
                type="button"
                className={twMerge("btn", twBtnStyle)}
                onClick={() => func && func()}
              >
                Confirm
              </button>

              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  const dialog = document.getElementById(
                    id,
                  ) as HTMLDialogElement;
                  dialog.hidden = true;
                  dialog.close();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
