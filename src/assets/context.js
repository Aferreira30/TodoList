import React ,{useState}from 'react';
import App from '../App';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children})=>{

  const [toggle, setToggle] = useState(false);
  console.log(toggle)

  return(
    <GlobalContext.Provider value={{toggle,setToggle}}>
      {children}
      <App />
    </GlobalContext.Provider>
  )

}

export default GlobalStorage;