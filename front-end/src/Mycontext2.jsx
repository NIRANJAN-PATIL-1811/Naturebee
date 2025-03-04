import { useState, createContext } from "react";

export const Context2 = createContext();

function Mycontext2({children}) {

  const [ initialAddressVal, changeAddressVal ] = useState("Please enter your address to proceed with the order");

  const [ initialUserName, changeUserName ] = useState("");

  return (
    <>
      <Context2.Provider value={{initialAddressVal, changeAddressVal, initialUserName, changeUserName}}>
        {children}
      </Context2.Provider>
    </>
  );
}

export default Mycontext2;