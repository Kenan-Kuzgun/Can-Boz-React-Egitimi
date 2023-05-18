import React from "react";
import useCounter from "./useCounter";

function Sayac() {
  const [num, increment, descrement, reset] = useCounter();
  return (
    <div>
      <h2>Sayı = {num}</h2>
      <button onClick={increment}>Arttır</button>
      <button onClick={descrement}>Azalt</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Sayac;
