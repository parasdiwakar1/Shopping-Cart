import React, { createContext, useState } from 'react';

export const Addcarddata = createContext();

function Adddata({ children }) {
  const [addbox, setAddbox] = useState({ addy: [], prev: [] });
  const [sdata,setSdata]=useState([])
  
  


  return (
    <Addcarddata.Provider value={{ addbox, setAddbox,sdata,setSdata}}>
      {children}
    </Addcarddata.Provider>
  );
}

export default Adddata;
