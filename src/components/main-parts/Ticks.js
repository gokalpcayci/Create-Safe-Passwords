import React from "react";
import { useState } from "react";
export default function Ticks(props) {
  const [checkedState, setCheckedState] = useState(checkObj);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item) => {
      return {
        ...item,
        value: item.id === position ? !item.value : item.value,
      };
    });
    setCheckedState(updatedCheckedState);
  };
  // console.log(checkedState);
  props.setCheckboxValue(checkedState);

  return (
    <>
      <ul className="flex flex-col mb-6  space-y-5 w-full">
        {checkedState.map((check, index) => {
          return (
            <li key={index} class="flex w-full h-full   space-x-4 ">
              <div class="flex items-center  ">
                <input
                  type="checkbox"
                  value={check.value}
                  id={`custom-checkbox-${index}`}
                  checked={check.value}
                  onChange={() => handleOnChange(index)}
                  className="opacity-0 absolute h-8 w-8 "
                />
                <div class="bg-app-gray-800 border-2 outline-none cursor-pointer  border-app-gray-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                  <svg
                    class="fill-current hidden w-4 h-4  pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="hsl(248, 15%, 11%)"
                        fillRule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <label className="text-md font-mono translate-y-1 text-gray-300 font-semibold">
                {check.text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
const checkObj = [
  {
    id: 0,
    text: "Include Uppercase Letters",
    value: false,
    type: "uppercase",
  },
  {
    id: 1,
    text: "Include Lowercase Letters",
    value: false,
    type: "lowercase",
  },
  { id: 2, text: "Include Numbers", value: false, type: "numbers" },
  { id: 3, text: "Include Symbols", value: false, type: "symbols" },
];
