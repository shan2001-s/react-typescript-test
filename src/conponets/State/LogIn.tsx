import { useState } from "react"


/*export const LogIn=()=>{
    const [LogIn, setLogIn] = useState(Boolean);
    

    const HandleLogIn=()=>{
        setLogIn(true)
    }
    const HandleLogOut=()=>{
        setLogIn(false)
    }
    return(
        <div>
            <button onClick={HandleLogIn}>LogIn</button>
            <button onClick={HandleLogOut}>LogOut</button>
            <div>{LogIn ? 'this is log in' :'this is log out'}</div>
        </div>
     
    )
}*/


///////// better

export const LogIn=()=>{
    const [LogIn, setLogIn] = useState(false);
    const [LogOut, setLogOut] = useState(false);
    

    const HandleLogIn=()=>{
        setLogIn(true)
        setLogOut(false)
    }
    const HandleLogOut=()=>{
        setLogOut(true)
        setLogIn(false)
    }
    return(
        <div>
            <button  onClick={HandleLogIn}>LogIn</button>
            <button onClick={HandleLogOut}>LogOut</button>
            <div>{LogIn ? 'this is log in' : ''}</div>
            <div>{LogOut ? 'this is log out' : ''}</div>
        </div>
     
    )
}