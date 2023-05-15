import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [can, setCan] = useState(0);
  const [tuba, setTuba] = useState(0);

  useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve içerisindeki herhangi bir state değeri değiştirildiğinde tekrar çalışır."
    );
  });

  useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve daha sonra state değişse de çalışmaz."
    );
  }, []);

  useEffect(() => {
    console.log(
      "Bu kod ilk defa çağrıldığında çalışır ve daha sonra can state'i değişirse çalışır."
    );
  }, [can]);

  return (
    <>
      <div>
        <button onClick={() => setCan(can + 1)}>Can ++</button>
        <div>Can:{can}</div>
        <button onClick={() => setTuba(tuba + 1)}>Tuba ++</button>
        <div>Tuba:{tuba}</div>
      </div>
    </>
  );
}

export default App;
