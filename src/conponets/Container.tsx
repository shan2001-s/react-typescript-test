type ContainerProps={
    style:React.CSSProperties
}

export const Container=(props:ContainerProps)=>{
    return <div> 
        <h3 style={props.style} > This is  text style  </h3>
        </div>
}