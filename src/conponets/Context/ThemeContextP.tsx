import { createContext, useContext } from "react"
import { Theme } from "./Theme"

type themeContextProvider={
    children:React.ReactNode
}

 export const theme =createContext(Theme)

export const ThemeContextP=(props:themeContextProvider)=>{
return(
   <theme.Provider value={Theme}>{props.children}</theme.Provider>
)
}