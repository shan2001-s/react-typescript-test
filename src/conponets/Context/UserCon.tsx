import { useContext } from "react"
import { userContext } from "./UserContexP"


export const UserCon=()=>{
    const UseUser= useContext(userContext)
    const LoginClick=()=>{
        if(UseUser){
           UseUser.setuser({
               name:'j',
               email:'a'
           })
        }
    }
    const LogoutClick=()=>{
        if(UseUser){
            UseUser.setuser(null)
        }
    }
    return(
        <div><h2>{UseUser?.user?.name}</h2><h2>{UseUser?.user?.email}</h2>
            <button onClick={LoginClick}>Log in</button>
            <button onClick={LogoutClick}>Log out</button>
        </div>
        
    )
}