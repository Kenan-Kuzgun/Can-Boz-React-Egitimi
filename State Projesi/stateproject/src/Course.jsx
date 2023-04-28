import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import cSharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

import React from "react";

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  cSharp: cSharp,
  Web: Web,
};

export const Course = ({ courseName }) => {
  console.log(courseMap[courseName]);
  return (
    <div>
      <img src={courseMap[courseName]} />
    </div>
  );
};
