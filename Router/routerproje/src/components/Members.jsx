import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searcParams, setSearchParams] = useSearchParams();
  const isActive = searcParams.get("filter") === "active";
  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Aktif üyeler
      </button>
      <button onClick={() => setSearchParams()}>Tüm üyeler</button>
      {isActive ? <h2>Aktif üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  );
}

export default Members;
