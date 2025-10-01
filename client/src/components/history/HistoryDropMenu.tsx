import { HistoryIcon } from "lucide-react";
import useRollStore from "@stores/useRollStore";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useThemeStore from "@stores/useThemeStore";
import type { ModalHandler } from "types/Modal";

const NotificationModal = lazy(
  () => import("@components/common/NotificationModal"),
);

function HistoryDropMenu() {
  const { rolls, loading, error, fetchRolls, deleteRoll, deleteRolls } =
    useRollStore();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectedRollId, setSelectedRollId] = useState<number | undefined>(
    undefined,
  );
  const [modalMode, setModalMode] = useState<"single" | "bulk" | undefined>(
    undefined,
  );
  const modalRef = useRef<ModalHandler>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    const getRolls = async () => {
      await fetchRolls();
    };

    getRolls();
  }, []);

  const openSingleDelete = (rollId: number) => {
    setSelectedRollId(rollId);
    setModalMode("single");
    modalRef.current?.openModal?.();
  };

  const openBulkDelete = () => {
    setModalMode("bulk");
    modalRef.current?.openModal?.();
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle bg-transparent">
        <HistoryIcon size={22} />
      </div>

      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 max-h-97 overflow-x-auto shadow-sm"
      >
        {error && <div className="alert alert-error mb-2">{error}</div>}

        {loading ? (
          <div className="flex items-center justify-center">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <li>
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={
                        selectedIds.length === rolls.length && rolls.length > 0
                      }
                      onChange={() =>
                        setSelectedIds(
                          selectedIds.length === rolls.length
                            ? []
                            : rolls.map((r) => r.id),
                        )
                      }
                    />
                  </th>
                  <th>ID</th>
                  <th>Result</th>
                  <th>Dice Type</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {rolls.map((roll) => (
                  <tr
                    key={roll.id}
                    className={twMerge(
                      "hover:bg-neutral rounded-box",
                      theme === "light" && "hover:bg-neutral/30",
                    )}
                  >
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={selectedIds.includes(roll.id)}
                          onChange={() =>
                            setSelectedIds((prev) =>
                              prev.includes(roll.id)
                                ? prev.filter((id) => id !== roll.id)
                                : [...prev, roll.id],
                            )
                          }
                        />
                      </label>
                    </td>
                    <td>{roll.id}</td>
                    <td>{roll.result}</td>
                    <td>{roll.type}</td>
                    <td>{new Date(roll.createdAt).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => openSingleDelete(roll.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedIds.length > 0 && (
              <div className="pointer-events-none sticky bottom-0 m-2 flex cursor-default justify-center hover:bg-transparent">
                <button
                  className="btn btn-error pointer-events-auto"
                  onClick={openBulkDelete}
                >
                  Delete Selected
                </button>
              </div>
            )}
          </li>
        )}
      </ul>

      {/* Render the lazy modal once (always mounted). Use a small fallback. */}
      <Suspense fallback={null}>
        <NotificationModal
          id={
            modalMode === "single"
              ? `delete-roll-${selectedRollId ?? "none"}`
              : `delete-rolls-bulk`
          }
          title={modalMode === "single" ? "Delete" : "Delete selected rolls"}
          message={
            modalMode === "single"
              ? `Are you sure you want to delete roll #${selectedRollId ?? ""}?`
              : `Are you sure you want to delete ${selectedIds.length} roll(s)?`
          }
          ref={modalRef}
          twBtnStyle="btn-error"
          // provide proper function depending on mode
          func={async () => {
            if (modalMode === "single" && selectedRollId != null) {
              await deleteRoll(selectedRollId);
            } else if (modalMode === "bulk" && selectedIds.length > 0) {
              await deleteRolls(selectedIds);
              setSelectedIds([]);
            }
          }}
        />
      </Suspense>
    </div>
  );
}

export default HistoryDropMenu;
