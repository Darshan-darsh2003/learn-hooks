import { useState, useEffect } from "react";

export function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>
        The `useEffect` hook lets you perform side effects in function
        components. This hook runs after every render by default, and you can
        pass dependencies to control when the effect runs. In this example, we
        update the document title every time the `count` changes.
      </p>

      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
