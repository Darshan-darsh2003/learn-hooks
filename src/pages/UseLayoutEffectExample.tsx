import { useLayoutEffect, useRef, useState } from "react";

export function UseLayoutEffectExample() {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (boxRef.current && textRef.current) {
      // Get the dimensions of the box and text element
      const boxRect = boxRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();

      // Center the text by calculating the offset
      const topOffset = (boxRect.height - textRect.height) / 2;
      const leftOffset = (boxRect.width - textRect.width) / 2;

      textRef.current.style.position = "absolute";
      textRef.current.style.top = `${topOffset}px`;
      textRef.current.style.left = `${leftOffset}px`;

      // Store dimensions for display
      setDimensions({
        width: boxRect.width,
        height: boxRect.height,
      });
    }
  }, []); // Run only once after the component is mounted

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>useLayoutEffect Example</h1>
      <p>
        The <code>useLayoutEffect</code> hook is similar to{" "}
        <code>useEffect</code> but fires synchronously after all DOM mutations.
        In this example, we immediately center a text element inside a box when
        the component renders, based on the dimensions of the box and text.
      </p>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          backgroundColor: "lightgray",
          margin: "20px auto",
          border: "1px solid black",
        }}
      >
        <p ref={textRef} style={{ margin: 0 }}>
          Centered Text
        </p>

        <p style={{ position: "absolute", bottom: "10px", left: "10px" }}>
          Box Dimensions: {dimensions.width} x {dimensions.height}
        </p>
      </div>
    </div>
  );
}
