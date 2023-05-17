import { useContext } from "react";
import { NumberContext } from "./App";
function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>Sayı: {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        Arttır
      </button>
      <button onClick={() => numberContext.dispatch("descrement")}>
        Azalt
      </button>
      <button onClick={() => numberContext.dispatch("reset")}>Reset</button>
    </>
  );
}

export default Calculate;
