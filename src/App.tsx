import React, { useEffect, useState } from "react";

export default function App() {
  const [jocke, setJocke] = useState<string>("this is a place holder");
  const [needJocke, setNeedJocke] = useState<boolean>(true);

  const getJocke = async () => {
    const response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    const data = await response.json();
    data.joke && setJocke(data.joke);
  };

  useEffect(() => {
    getJocke();
  }, [needJocke]);
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 h-[500px] w-[800px] rounded-3xl shadow-2xl flex justify-center  p-8 flex-col items-center">
        <h1 className="text-4xl font-poppins font-bold text-white mt-5 text-center  ">
          Joke Generator Using React and Joke API
        </h1>
        <button
          className="bg-white font-poppins text-indigo-600 hover:bg-indigo-600 hover:text-white text-3xl mt-4 rounded-lg p-2 w-[200px]"
          onClick={() => setNeedJocke(!needJocke)}
        >
          Click
        </button>

        <h1 className="text-2xl font-poppins font text-white mt-5 text-center  ">
          {jocke}
        </h1>
      </div>
    </div>
  );
}
