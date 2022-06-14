type ReactNodeProps={
    children:React.ReactNode
}
export const ReactNode=(props:ReactNodeProps)=>{
    return <div>
        <h6 >{props.children}</h6>
    </div>
}