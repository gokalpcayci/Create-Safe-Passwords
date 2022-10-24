import Copy from "./UI/Copy";
import Slider from "./components/main-parts/Slider";
import Ticks from "./components/main-parts/Ticks";
import { useState } from "react";
function App(props) {
  const [checkBoxValue, setCheckboxValue] = useState([
    {
      id: 0,
      text: "Include Uppercase Letters",
      value: true,
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
  ]);
  const [value, setValue] = useState([3]);
  const handleValueChange = (value) => {
    setValue(value);
  };
  console.log(value, checkBoxValue);
  // console.log(checkBoxValue);
  // console.log(value);

  /* 
  0-4 arası  ⇒ weak
  7 sınırında ⇒ medium (hepsini seçsen de aynı)
  9  sınırında ⇒ strong
  11 ve sonrası ⇒ very strong
  */
  // random checkbox value generation
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const symbols = "@%+/!#$?~".split("");
  const numbers = "0123456789".split("");
  const lowercase = new Set(letters.toLowerCase());
  const uppercase = new Set(letters.toUpperCase());
  const arrLowercase = [...lowercase];
  const arrUppercase = [...uppercase];

  const handleStrength = () => {
    if (value >= 4 && value < 7) return "weak";
    if (value >= 7 && value < 9) return "medium";
    if (value >= 9 && value < 11) return "strong";
    if (value >= 11) return "very_strong";
  };

  const randomize = () => {
    const randoms = [];
    checkBoxValue.forEach((val) => {
      for (let c = 0; c < value * 3; c++) {
        let runNumber = 0;
        // uppercase
        if (val.type === "uppercase" && val.value === true) {
          randoms.push(
            arrUppercase[
              Math.trunc(Math.random() * uppercase.size + runNumber++)
            ]
          );
        }
        // lowercase
        if (val.type === "lowercase" && val.value === true) {
          randoms.push(
            arrLowercase[
              Math.trunc(Math.random() * lowercase.size + runNumber++)
            ]
          );
        }
        // numbers
        if (val.type === "numbers" && val.value === true) {
          randoms.push(
            numbers[Math.trunc(Math.random() * numbers.length + runNumber++)]
          );
        }
        // symbols
        if (val.type === "symbols" && val.value === true) {
          randoms.push(
            symbols[Math.trunc(Math.random() * symbols.length + runNumber++)]
          );
        }
      }
    });
    const non_repeatingRandoms = [...new Set(randoms)];

    let result = [];
    for (let b = 0; b < value; b++) {
      result.push(
        non_repeatingRandoms[
          Math.trunc(Math.random() * non_repeatingRandoms.length)
        ]
      );
    }
    return result;
  };
  randomize();

  return (
    <div className="min-h-screem spacer layer1">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center max-w-7xl w-full m-3 sm:m-0 space-y-4">
          <h1 className="text-gray-300 max-w-sm font-semibold font-mono text-lg">
            Password Generator
          </h1>
          {/* second part */}
          <div className="py-4 px-6 w-full sm:w-96 rounded-sm  flex items-center justify-between shadow-lg bg-app-gray-800 ">
            <p
              id="text"
              className={`${
                randomize().length > 10
                  ? "text-app-gray-500 font-semibold text-2xl font-mono"
                  : "text-app-gray-500 font-semibold text-3xl font-mono"
              }`}
            >
              {/* PTx1f5DaFX */}
              {randomize()}
            </p>
            <Copy randomize={randomize()} />
          </div>
          {/* third part */}
          <div className="py-6 px-4 w-full sm:w-96 flex rounded-sm flex-col items-center justify-center shadow-lg bg-app-gray-800">
            <div className="flex flex-col w-full space-y-2 mb-8">
              <div className="flex w-full items-center justify-between">
                <p className="text-gray-300 text-lg font-semibold font-mono">
                  Character Length
                </p>
                <h3 className="text-app-green  font-tech text-3xl">
                  {[...value]}
                </h3>
              </div>
              <div className="w-full h-full">
                <Slider value={value} handleValueChange={handleValueChange} />
              </div>
            </div>
            {/* checkbox */}
            <Ticks
              setCheckboxValue={setCheckboxValue}
              checkBoxValue={checkBoxValue}
            />
            {/* strength */}
            <div className="py-4 px-6 mb-6 bg-app-gray-900 rounded-sm w-full">
              <div className="flex items-center justify-between">
                <p className="uppercase font-mono text-app-gray-500 text-md font-bold">
                  Strength
                </p>
                {/* safety */}
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="text-lg text-gray-300 font-mono uppercase font-semibold">
                    {value < 4
                      ? "weak"
                      : `${
                          handleStrength() === "very_strong"
                            ? "very strong"
                            : handleStrength()
                        }`}
                  </h3>
                  <div className="flex  space-x-1">
                    <div
                      className={
                        handleStrength() === "weak" || value >= 4
                          ? "w-2 h-5  border-2 border-gray-300 bg-app-red"
                          : "w-2 h-5  border-2 border-gray-300 bg-app-gray-900"
                      }
                    ></div>
                    <div
                      className={
                        handleStrength() === "medium" || value >= 7
                          ? "w-2 h-5  border-2 border-gray-300 bg-app-orange"
                          : "w-2 h-5  border-2 border-gray-300 bg-app-gray-900"
                      }
                    ></div>
                    <div
                      className={
                        handleStrength() === "strong" || value >= 9
                          ? "w-2 h-5  border-2 border-gray-300 bg-app-yellow"
                          : "w-2 h-5  border-2 border-gray-300 bg-app-gray-900"
                      }
                    ></div>
                    <div
                      className={
                        handleStrength() === "very_strong" || value >= 11
                          ? "w-2 h-5  border-2 border-gray-300 bg-app-green"
                          : "w-2 h-5  border-2 border-gray-300 bg-app-gray-900"
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* generate */}
            <button className="py-4 px-6 w-full rounded-sm  font-mono text-sm uppercase font-[800]  text-app-gray-800 transform duration-300   bg-app-green border-2 border-app-green hover:bg-app-gray-800 hover:text-app-green hover:border-app-green ">
              Generate =>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
