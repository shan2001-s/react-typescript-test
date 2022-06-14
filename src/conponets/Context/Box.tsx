import {  useContext } from "react"
import { theme } from "./ThemeContextP"



export const Box=()=>{
    const themes =useContext(theme)
    return(
       
       <div style={{background:themes.parimy.main, color:themes.parimy.text}}>hello Chan</div>
    )
}