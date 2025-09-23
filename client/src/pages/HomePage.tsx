import { useEffect, useState } from "react";
import useUserStore from "../store/useUserStore";

function HomePage() {
  const { users, loading, error, fetchUsers } = useUserStore();
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(-1);

  const rollDice = (dice: number): void => {
    const result = Math.floor(Math.random() * dice) + 1;
    setResult(result);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(users, loading, error);

  return (
    <main className="grid place-items-center">
      <div className="container mx-auto p-4">
        {error && <div className="alert alert-error mb-8">{error}</div>}

        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="loading loading-spinner loading-lg"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <ul key={user.id}>
                <li>{user.name}</li>
                <li>{user.email}</li>
              </ul>
            ))}
          </div>
        )}
      </div>

      {/* Main dice roller */}
      <div className="my-4 grid place-items-center space-y-4">
        {sides === -1 ? (
          <label className="text-3xl">Select a dice to roll</label>
        ) : (
          <></>
        )}
        <div
          className="radial-progress size-32 text-3xl"
          style={{ ["--value"]: (result / sides) * 100 } as React.CSSProperties}
          aria-valuenow={result}
          role="progressbar"
        >
          {result}
        </div>
      </div>

      <div className="join gap-1.5 [&>*]:rounded-md">
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D4"
          onChange={() => setSides(4)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D6"
          onChange={() => setSides(6)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D8"
          onChange={() => setSides(8)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D10"
          onChange={() => setSides(10)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D12"
          onChange={() => setSides(12)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D20"
          onChange={() => setSides(20)}
        />
        <input
          className="join-item btn"
          type="radio"
          name="options"
          aria-label="D100"
          onChange={() => setSides(100)}
        />
      </div>
      <button
        className="btn btn-primary btn-lg mt-4"
        onClick={() => rollDice(sides)}
      >
        Roll Dice
      </button>
    </main>
  );
}

export default HomePage;
