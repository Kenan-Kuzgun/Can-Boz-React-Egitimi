import React from "react";

const authContext = React.createContext({ status: null, login: () => {} });

export default authContext;
