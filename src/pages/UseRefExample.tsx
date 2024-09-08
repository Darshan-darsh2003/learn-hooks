import { useRef } from "react";

export function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>useRef Example</h1>
      <p>
        The `useRef` hook allows you to persist values across renders without
        causing a re-render when the value changes. It can also be used to
        directly access DOM elements. In this example, we use `useRef` to focus
        the input when the button is clicked.
      </p>

      <input ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
