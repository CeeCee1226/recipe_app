import { createContext } from "react";
import { f_list } from "../assets/assets";
export const StoreContext = createContext(null)
const StoreContextProvider = ({children}) =>{
    const contextValue = {f_list} 
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider