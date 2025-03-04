import { createContext, useState } from "react";

export const Context1 = createContext();

function Mycontext({children}) {

  const [ getValue, setValue ] = useState("");
  
  return (
    <>
      <Context1.Provider value={{getValue, setValue}}>
        {children}
      </Context1.Provider>
    </>
  );
}

export default Mycontext;