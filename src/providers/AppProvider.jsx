import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialAuth = sessionStorage.getItem("host_beak_auth") ? JSON.parse(sessionStorage.getItem("host_beak_auth")) : false




  console.log("init",initialAuth);
  const [activeLink, setActiveLink] = useState("purchases");
  const [show, setShow] = useState(true);
  const [auth, setAuth] = useState(initialAuth);
  const [showSidebar, setShowSidebar]= useState(false)


  console.log("active link", activeLink);

  useEffect(()=>{

    setAuth(initialAuth)

  },[initialAuth])
  return (
    <AppContext.Provider value={{ show, setShow, activeLink, setActiveLink, auth, setAuth, showSidebar, setShowSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
