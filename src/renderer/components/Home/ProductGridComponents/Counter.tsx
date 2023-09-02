import { useState } from "react";

export default function Counter({quantity, stock, setQuantity}) {
  const [counter, setCounter] = useState(quantity);

  function addCounter() {
    if(counter < stock) {
      setQuantity(counter+1)
      setCounter(counter+1);
    }
  }

  function subtractCounter() {
    if(counter > 1) {
      setQuantity(counter-1)
      setCounter(counter-1);
    }
  }

  return (
    <div className="ml-2 flex w-2/4 items-center">
      <div className="mr-1">
        <button onClick={subtractCounter}
          className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-1 px-3 rounded-full">
          -
        </button>
      </div>
      <div className="">
        <input value={counter} readOnly className="w-7 h-fit border-none text-center focus:border-none" type="text" />
      </div>
      <div className="ml-1">
        <button onClick={addCounter}
          className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-1 px-3 rounded-full">
          +
        </button>
      </div>
    </div>
  )
}
