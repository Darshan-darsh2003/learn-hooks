import { useDebugValue, useState } from "react";

function useCustomHook(value: number) {
  useDebugValue(value > 5 ? "High" : "Low");
  return value;
}

export function UseDebugValueExample() {
  const [count, setCount] = useState(0);
  const value = useCustomHook(count);

  return (
    <div>
      <h1>useDebugValue Example</h1>
      <p>
        The `useDebugValue` hook is useful for debugging custom hooks in React
        DevTools. In this example, we display "High" or "Low" based on the
        `count` value in the React DevTools.
      </p>

      <p>Current value: {value}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
