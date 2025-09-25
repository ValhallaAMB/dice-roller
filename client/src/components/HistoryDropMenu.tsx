import { HistoryIcon } from "lucide-react";
import useRollStore from "../store/useRollStore";
import { useEffect, useState } from "react";

function HistoryDropMenu() {
  const { rolls, loading, error, fetchRolls, deleteRoll, deleteRolls } =
    useRollStore();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    fetchRolls();
  }, [fetchRolls]);

  return (
    <button className="dropdown dropdown-end cursor-pointer">
      <HistoryIcon size={22} />
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 max-h-97 overflow-x-auto">
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
                        // expects: selectedIds: number[], setSelectedIds: (ids: number[]) => void, rolls: { id: number }[]
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
                  <tr key={roll.id} className="hover:bg-neutral rounded-box">
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
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => deleteRoll(roll.id)}
                      >
                        Delete
                      </button>
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
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => {
                        // expects: deleteRolls(ids: number[]) available from useRollStore
                        deleteRolls(selectedIds);
                        setSelectedIds([]);
                      }}
                    >
                      {selectedIds.length === rolls.length
                        ? "Delete all rolls"
                        : "Delete rolls"}
                    </button>
                  </td>
                </tfoot>
              )}
            </table>
          </li>
        )}
      </ul>
    </button>
  );
}

export default HistoryDropMenu;
