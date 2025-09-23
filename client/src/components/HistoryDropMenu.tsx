import { HistoryIcon } from "lucide-react";
import useRollStore from "../store/useRollStore";
import { useEffect } from "react";

function HistoryDropMenu() {
  const { rolls, loading, error, fetchRolls, deleteRoll } = useRollStore();

  useEffect(() => {
    fetchRolls();
  }, [fetchRolls]);

  return (
    <button className="dropdown dropdown-end cursor-pointer">
      <HistoryIcon size={22} />
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 mt-1 overflow-x-auto max-h-97">
        {/* ERROR MESSAGE */}
        {error && <div className="alert alert-error mb-2">{error}</div>}

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
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
                  <th>{roll.id}</th>
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
          </table>
        )}
      </ul>
    </button>
  );
}

export default HistoryDropMenu;
