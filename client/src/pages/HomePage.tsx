import { useState } from "react";
import useRollStore from "@stores/useRollStore";
import useAuthStore from "@stores/useAuthStore";
import CountUp from "@components/common/CountUp";
import BlurText from "@components/common/BlurText";

function HomePage() {
  const { createRoll } = useRollStore();
  const { user } = useAuthStore();
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(-1);

  const rollDice = async (dice: number): Promise<void> => {
    const result = Math.floor(Math.random() * dice) + 1;
    setResult(result);
    if (user?.id) await createRoll(user.id, "D" + sides, result);
  };

  return (
    <main className="grid min-h-[80dvh] place-content-center">
      {/* Main dice roller */}
      <div className="flex flex-col items-center gap-y-2">
        {sides === -1 ? (
          // <label className="mb-5 text-3xl">Select a dice to roll</label>
          <BlurText
            text="Select a dice to roll"
            delay={50}
            animateBy="letters"
            direction="top"
            className="text-5xl"
          />
        ) : (
          <></>
        )}
        {/* <div
          className="radial-progress mb-5 size-32 text-3xl"
          style={{ ["--value"]: (result / sides) * 100 } as React.CSSProperties}
          aria-valuenow={result}
          role="progressbar"
        >
          {result}
        </div> */}
        <CountUp
          from={0}
          to={result}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text mb-5 text-8xl"
        />
      </div>

      <div className="join [&>*]:btn-outline gap-1.5 [&>*]:rounded-md">
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
