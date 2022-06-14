import { createContext,useState } from "react"

type userContextProviderProps={
    children:React.ReactNode
}
 type Author={
     name:string,
     email:string
 }

 type userType={
     user:Author | null,
     setuser:React.Dispatch<React.SetStateAction<Author | null>>
 }

export const userContext=createContext <userType | null> (null)

export const UserContexP=({children}:userContextProviderProps)=>{
    const [user, setuser] = useState <Author | null>(null)
    
  return(
    <userContext.Provider value={{user,setuser}}>{children}</userContext.Provider>
  ) 
}