import { useState, useCallback } from "react";

export function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>
        The `useCallback` hook returns a memoized version of the callback
        function that only changes if one of the dependencies has changed. In
        this example, the `increment` function is memoized so it doesn't get
        redefined on every render.
      </p>

      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
