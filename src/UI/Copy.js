import React from "react";
import { useState, useEffect } from "react";
function Copy(props) {
  const [btnStyle, setBtnStyle] = useState(false);

  const clickHandler = () => {
    setBtnStyle(!btnStyle);
    copyContent();
  };

  // <button class="btn" onclick="copyContent()">Copy!</button>

  let text = document.getElementById("text")?.innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button onClick={clickHandler}>
      <svg
        className={` tranform duration-150 ${
          !btnStyle
            ? "w-7  fill-app-gray-500  stroke-[12px] h-6"
            : "fill-app-green rotate-360 scale-105 w-7 h-6 stroke-[12px]"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 438 512.37"
      >
        <path
          fill-rule="nonzero"
          d="M107.62 54.52V25.03c0-6.9 2.82-13.16 7.34-17.69C119.49 2.82 125.75 0 132.65 0h191.46c3.22 0 6.1 1.45 8.03 3.74l102.87 105.4c1.97 2.03 2.96 4.66 2.96 7.29l.03 316.39c0 6.82-2.82 13.07-7.36 17.62l-.04.05c-4.57 4.54-10.82 7.36-17.63 7.36h-82.59v29.49c0 6.84-2.81 13.09-7.35 17.64l-.04.04c-4.57 4.54-10.8 7.35-17.64 7.35H25.03c-6.9 0-13.16-2.82-17.69-7.34C2.82 500.5 0 494.24 0 487.34V79.56c0-6.91 2.82-13.17 7.34-17.69 4.53-4.53 10.79-7.35 17.69-7.35h82.59zm309.41 76.03h-78.85c-8.54 0-16.31-3.51-21.95-9.14l-.04-.04c-5.64-5.64-9.14-13.41-9.14-21.95V20.97h-174.4c-1.1 0-2.12.46-2.86 1.2-.73.74-1.2 1.76-1.2 2.86v29.49h57.68c3.21 0 6.09 1.45 8.01 3.73l133.07 135.56c2 2.03 3 4.69 3 7.33l.03 235.73h82.59c1.11 0 2.12-.45 2.84-1.17l.04-.04c.72-.72 1.18-1.73 1.18-2.84V130.55zm-11.69-20.97-77.32-78.77v68.61c0 2.8 1.14 5.35 2.97 7.19 1.84 1.83 4.39 2.97 7.19 2.97h67.16zm-95.93 107.27h-106.4c-10.24 0-19.55-4.19-26.29-10.92-6.73-6.73-10.92-16.05-10.92-26.29V75.5H25.03c-1.1 0-2.12.46-2.86 1.2-.73.73-1.2 1.75-1.2 2.86v407.78c0 1.1.47 2.12 1.2 2.86.74.74 1.76 1.2 2.86 1.2h280.32c1.13 0 2.14-.45 2.85-1.16l.05-.05c.71-.71 1.16-1.72 1.16-2.85V216.85zm-12.14-20.97L186.77 83.31v96.33c0 4.45 1.84 8.52 4.78 11.46 2.95 2.95 7.01 4.78 11.46 4.78h94.26z"
        />
      </svg>
    </button>
  );
}

export default Copy;
