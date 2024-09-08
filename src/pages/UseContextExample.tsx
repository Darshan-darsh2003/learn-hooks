import { createContext, useContext } from "react";

const CountContext = createContext(0);

export function UseContextExample() {
  return (
    <CountContext.Provider value={10}>
      <DisplayCount />
    </CountContext.Provider>
  );
}

function DisplayCount() {
  const count = useContext(CountContext);
  return (
    <div>
      <h1>useContext Example</h1>
      <p>
        The `useContext` hook allows you to consume context values in your
        components. Context provides a way to pass data through the component
        tree without having to pass props down manually. In this example, we're
        using `useContext` to access a `count` value from the `CountContext`.
      </p>

      <p>Count value from context: {count}</p>
    </div>
  );
}
