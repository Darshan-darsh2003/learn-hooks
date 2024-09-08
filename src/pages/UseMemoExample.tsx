import { useMemo, useState } from "react";

export function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveComputation = (num: number) => {
    console.log("Expensive computation running...");
    return num * 2;
  };

  const computedValue = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>
        The `useMemo` hook memoizes expensive calculations so they are only
        recomputed when necessary. In this example, the `expensiveComputation`
        function will only re-run when `count` changes, even if the component
        re-renders.
      </p>

      <p>Computed value: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Input to trigger re-render"
      />
    </div>
  );
}
