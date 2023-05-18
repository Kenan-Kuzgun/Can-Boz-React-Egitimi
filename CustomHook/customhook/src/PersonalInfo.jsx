import React from "react";
import { useState } from "react";
import useInput from "./useInput";

function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstname] = useInput("");
  const [lastName, bindLastName, resetLastname] = useInput("");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirstname();
    resetLastname();
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label>Ad</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Soyad</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Kaydet</button>
      </form>
    </>
  );
}

export default PersonalInfo;
