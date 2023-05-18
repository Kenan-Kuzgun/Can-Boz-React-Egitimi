import React from "react";
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate("/")}>Home git</button>
    </>
  );
}

export default Mission;

// navigate(-1) : önceki sayfaya döner
