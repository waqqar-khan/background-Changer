import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [displayColorText, setDisplayColorText] = useState("White");

  const handleChange = (color, displayColorText) => {
    setColor(color);
    setDisplayColorText(displayColorText);
  };

  const textColorClass = color === "white" ? "text-black" : "text-white";
  
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <header  className={`text-center text-4xl font-bold py-8 ${textColorClass}`}>
          This is {displayColorText} Background Display
        </header>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full bg-white text-red-600 shadow-lg"
              onClick={() => handleChange("red", "Red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full bg-white text-green-600 shadow-lg"
              onClick={() => handleChange("green", "Green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full bg-white text-blue-600 shadow-lg"
              onClick={() => handleChange("blue", "Blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full bg-slate-500 text-white shadow-lg"
              onClick={() => handleChange("white", "White")}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
