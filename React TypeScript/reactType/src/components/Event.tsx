import { useState } from "react";

function Event() {
  const [value, setValue] = useState("");
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {};
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <button onClick={(event) => handleClick(event, 4)}>Sil</button>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default Event;
