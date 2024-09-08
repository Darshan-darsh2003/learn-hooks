import { useImperativeHandle, forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return <input ref={inputRef} {...props} />;
});

export function UseImperativeHandleExample() {
  const inputRef = useRef<{ focus: () => void }>(null);

  return (
    <div>
      <h1>useImperativeHandle Example</h1>
      <p>
        The `useImperativeHandle` hook customizes the instance value that is
        exposed to parent components when using `ref`. In this example, we
        expose a `focus` function to the parent component to control the
        `CustomInput` component's input element.
      </p>

      <CustomInput ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  );
}
