import React from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
import Skeleton from "@mui/material/Skeleton";
import UsersListItem from "./UsersListItem";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function UsersList() {
  const { data, isError, isFetching } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();
  debugger;

  const handleUserAdd = () => {
    addUser();
  };

  let content;
  if (isFetching) {
    content = (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "600px" }} />
    );
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "20px" }}>Kişiler</h1>
        <Button variant="outlined" onClick={handleUserAdd}>
          {results.isLoading ? <CircularProgress /> : <span> Kişi Ekle+</span>}
        </Button>
      </div>

      {content}
    </div>
  );
}

export default UsersList;
