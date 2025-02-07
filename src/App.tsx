import React from "react";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container w-[500px] h-[500px] bg-gradient-to-r from-blue-200  via-purple-300 to-pink-400 rounded-xl shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl">{counter}</h1>
        <button
          className="text-white text-3xl bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 p-4 mt-5 rounded-lg"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
}
