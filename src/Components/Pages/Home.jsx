import { useState } from "react";
import PascalTriangle from "./Triangle";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [angleLength, setAngleLength] = useState(0);
  const myRef = useRef(null);

  useEffect(()=>{
    myRef.current.focus();
  },[])

  const handleLength = (e) => {
    e.preventDefault();
    const length = e.target.val.value;
    console.log("Hi");
    setAngleLength(parseInt(length));

  };

  return (
    <div className="text-center">
      <h2 className="text-4xl py-10 text-green-500 font-semibold">
        Pascal Triangle Program
      </h2>

      <form onSubmit={handleLength} className="flex justify-center">
        <div className="group w-72 md:w-80 lg:w-96">
          <div className="relative flex items-center">
            <input
              ref={myRef}
              placeholder="Inter a Value of N"
              name="val"
              id="8"
              type="number"
              className="peer relative h-10 w-full rounded-md bg-gray-10 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg"
            />
            <button type="submit" className="absolute right-0 h-10 w-16 rounded-r-md bg-green-600 text-xs font-semibold text-white transition-all duration-200 ease-in-out group-focus-within:bg-green-500 group-focus-within:hover:bg-green-600">
              Triangle
            </button>
          </div>
        </div>
      </form>

      <PascalTriangle  rows={angleLength} />

    </div>
  );
}
export default App;