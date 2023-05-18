import React from "react";
import { useParams } from "react-router-dom";

function MemberDetails() {
  //   const params = useParams();
  //   const memberId = params.memberId;
  const { memberId } = useParams();
  return <div>{memberId}</div>;
}

export default MemberDetails;
