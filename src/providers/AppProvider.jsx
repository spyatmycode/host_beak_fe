import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");
  const [show, setShow] = useState(true);
  return (
    <AppContext.Provider value={{ show, setShow, activeLink, setActiveLink }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
