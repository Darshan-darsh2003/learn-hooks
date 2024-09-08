import { useReducer } from "react";

function countReducer(
  state: number,
  action: { type: "increment" | "decrement" }
) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export function UseReducerExample() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h1>useReducer Example</h1>
      <p>
        The `useReducer` hook is an alternative to `useState` for managing more
        complex state logic. It takes a reducer function and an initial state,
        and returns the current state paired with a dispatch method. In this
        example, we use a reducer to manage increment and decrement actions.
      </p>

      <p>Current count: {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
