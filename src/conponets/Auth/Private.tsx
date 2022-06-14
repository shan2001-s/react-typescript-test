import { Login } from "./Login"
import {profilePorp} from './Profile'
import {Profile} from './Profile'


type privateProps={
    isLogIn:boolean,
    Componet: React.ComponentType<profilePorp>
}

export const Private=({isLogIn,Componet}:privateProps)=>{

       
           if (isLogIn) {
            return <Componet name='Hello Chan' ></Componet>
           }
           else{
             return <Login/>
           }
        
    
}