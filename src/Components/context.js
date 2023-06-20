import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);
  console.log( toggle);
  return (
    <GlobalContext.Provider value={{ toggle, setToggle }}>
      {children}
    </GlobalContext.Provider>
  );
};
