import React from "react";

type ButtonProps={
    HandleClick:(event:React.MouseEvent<HTMLButtonElement> , id:number)=>void;
}

export const Button =(props:ButtonProps)=>{
    return <button onClick={(event)=>props.HandleClick(event,1)}>Click Me</button>
}