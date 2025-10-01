import { useState } from "react";
import useRollStore from "@stores/useRollStore";

function HomePage() {
  // const { users, loading, error, fetchUsers } = useUserStore();
  const { createRoll } = useRollStore();
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(-1);

  const rollDice = async (dice: number): Promise<void> => {
    const result = Math.floor(Math.random() * dice) + 1;
    setResult(result);
    await createRoll(1, "D" + sides, result);
  };

  // console.log(users, loading, error);

  return (
    <main className="grid place-items-center">
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
        onClick={() => (sides !== -1 ? rollDice(sides) : null)}
      >
        Roll Dice
      </button>
    </main>
  );
}

export default HomePage;
