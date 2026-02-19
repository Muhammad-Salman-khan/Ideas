import { auth, db } from "@/lib/firebase";
import React, { createContext, useContext } from "react";
const FireContext = createContext();
const FireBasePROvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FireContext.Provider value={{ auth, db }}>
        {children}
      </FireContext.Provider>
    </>
  );
};

export default FireBasePROvider;
