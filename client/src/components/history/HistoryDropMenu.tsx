import { HistoryIcon } from "lucide-react";
import useRollStore from "store/useRollStore";
import { useEffect, useState } from "react";
import NotificationModal from "../common/NotificationModal";
import useThemeStore from "store/useThemeStore";
import { twMerge } from "tailwind-merge";

function HistoryDropMenu() {
  const { rolls, loading, error, fetchRolls, deleteRoll, deleteRolls } =
    useRollStore();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const { theme } = useThemeStore();

  useEffect(() => {
    fetchRolls();
  }, [fetchRolls]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle bg-transparent">
        <HistoryIcon size={22} />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 max-h-97 overflow-x-auto shadow-sm"
      >
        {/* ERROR MESSAGE */}
        {error && <div className="alert alert-error mb-2">{error}</div>}

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <li>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={
                          selectedIds?.length === rolls.length &&
                          rolls.length > 0
                        }
                        onChange={() => {
                          if (selectedIds?.length === rolls.length) {
                            setSelectedIds([]);
                          } else {
                            setSelectedIds(rolls.map((r) => r.id));
                          }
                        }}
                      />
                    </label>
                  </th>
                  <th>ID</th>
                  <th>Result</th>
                  <th>Dice Type</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
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
                          onChange={() => {
                            if (selectedIds.includes(roll.id)) {
                              setSelectedIds(
                                selectedIds.filter((id) => id !== roll.id),
                              );
                            } else {
                              setSelectedIds([...selectedIds, roll.id]);
                            }
                          }}
                        />
                      </label>
                    </td>
                    <td>{roll.id}</td>
                    <td>{roll.result}</td>
                    <td>{roll.type}</td>
                    <td>{new Date(roll.createdAt).toLocaleString()}</td>
                    <td>
                      <NotificationModal
                        id={"delete-roll-" + roll.id}
                        name="Delete Roll"
                        title="Delete"
                        message={`Are you sure you want to delete roll #${roll.id}?`}
                        twBtnStyle="btn-error"
                        func={() => deleteRoll(roll.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* render a footer-row style delete button when there are selections */}
              {selectedIds && selectedIds.length > 0 && (
                <tfoot>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {/* Use a modal for bulk delete confirmation as well */}
                    <NotificationModal
                      id={"delete-rolls-bulk"}
                      name="Delete Rolls"
                      title={
                        selectedIds.length === rolls.length
                          ? "Delete all"
                          : "Delete"
                      }
                      message={`Are you sure you want to delete ${selectedIds.length} roll(s)?`}
                      twBtnStyle="btn-error"
                      func={() => {
                        deleteRolls(selectedIds);
                        setSelectedIds([]);
                      }}
                    />
                  </td>
                </tfoot>
              )}
            </table>
          </li>
        )}
      </ul>
    </div>
  );
}

export default HistoryDropMenu;
