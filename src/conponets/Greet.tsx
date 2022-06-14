type GreetProp={
    name:string
    age:number
    isLogIn:boolean
}

export const Greet = (prop:GreetProp) => {
    return(
        <div>
            <h2>
                {prop.isLogIn ?
                    `Hello Developer ${prop.name} !  Your age is ${prop.age}`
                    : `You are not Log in`
                } 
                
                
            </h2>
        </div>
    )
}