import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialAuth = localStorage.getItem("host_beak_auth") ? JSON.parse(localStorage.getItem("host_beak_auth")) : false




  console.log("init",initialAuth);
  const [activeLink, setActiveLink] = useState("");
  const [show, setShow] = useState(true);
  const [auth, setAuth] = useState(initialAuth);

  useEffect(()=>{

    setAuth(initialAuth)

  },[initialAuth])
  return (
    <AppContext.Provider value={{ show, setShow, activeLink, setActiveLink, auth, setAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
