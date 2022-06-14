import React from "react"

/*type InputProps={
    value:string
    HandleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}

export const Input=(props:InputProps)=>{
    const HandleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return <input value={props.value}  type="text"  onChange={HandleInputChange} />
}*/

////////// <OR>
type InputProps={
    value:string
    HandleChange(event:React.ChangeEvent<HTMLInputElement> ):void
}

export const Input=(props:InputProps)=>{
    return <input type="text" value={props.value} onChange={props.HandleChange}/>
}