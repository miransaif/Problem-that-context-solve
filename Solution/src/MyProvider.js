import React, { useState } from "react";
import MyContext from "./Context";

const MyProvider = ({ children }) => {
  const company = useState("Amazon");

  return <MyContext.Provider value={company}>{children}</MyContext.Provider>;
};

export default MyProvider;
