import { useState } from "react"

type Author={
    name:string,
    email:string
}


/*export const User=()=>{
    const [user, setuser] = useState<Author | null>(null)
    const HandleLogin=()=>{
        setuser({
            name:'John',
            email:'John@email.com'
        })
    }
    const HandleLogout=()=>{
        setuser(null)
    }
    return <div>
        <button onClick={HandleLogin}>LogIn User</button>
        <button onClick={HandleLogout}>LogOut User</button>
        <h5>User Name is {user?.name}</h5>
        <h5>User Email is {user?.email}</h5>
    </div>
}*/

////////////////// <OR>

export const User=()=>{
    const [user, setuser] = useState<Author >({} as Author)
    const HandleLogin=()=>{
        setuser({
            name:'John',
            email:'John@email.com'
        })
    }
    
    return <div>
        <button onClick={HandleLogin}>LogIn User</button>
       
        <h5>User Name is {user.name}</h5>
        <h5>User Email is {user.email}</h5>
    </div>
}