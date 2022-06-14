import { Children } from "react"

type ButtonProps={
    variant: 'primary' | 'secondary'
    onClick:()=>void
} & React.ComponentProps<'button'>


export const ButtonColor=({variant,children,onClick}:ButtonProps,)=>{
    return(
        <div>
            <button className={`class-with-${variant}`} onClick={onClick}>HP {children} </button>
        </div>
    )
}