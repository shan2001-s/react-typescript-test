import React from "react"
import { Greet } from "../Greet"

export const ExtraComponet=(Props: React.ComponentProps<typeof Greet>)=>{
    return(
       
        <div>
            {Props.isLogIn ?
            `${Props.name} is ${Props.age} year old `
            : 'you are not login'
            }
        </div>
    )
}