export type  profilePorp={
    name:string
}

export const Profile=(props:profilePorp)=>{
    return(
        <div>Welcome to Your Profile. I am {props.name}</div>
    )
}