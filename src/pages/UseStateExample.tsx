import { useState } from "react";

export function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useState Example</h1>
      <p>
        This hook allows you to add state to functional components. You can set
        and update state using the `useState` hook. In this example, the state
        variable `count` starts at 0 and increments by 1 when you click the
        button.
      </p>

      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
