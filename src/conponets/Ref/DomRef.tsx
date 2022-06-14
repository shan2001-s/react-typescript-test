import { useRef ,useEffect } from "react"



export  const DomRef=()=>{
    const inputRef=useRef<HTMLInputElement>(null)

    useEffect(() => {
      inputRef.current?.focus()
    
  
    }, [])
    

    return(
        <input type='text' ref={inputRef}></input>
    
    )
    }  