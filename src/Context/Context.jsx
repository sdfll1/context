import { createContext, useState } from "react";
const Context = createContext()
function Provirder({children}){
    const [id, setId] = useState(0)
    return(
        <Context.Provider value={{id, setId}}>
            {children}
        </Context.Provider>
    )
}
export{Context, Provirder}