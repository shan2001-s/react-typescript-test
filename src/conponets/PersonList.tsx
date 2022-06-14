import { Name } from "./Person.type"

type personListPorps={
    names:Name[]
}

export const PersonList=(porps:personListPorps)=>{
    return(
        <div>
           {porps.names.map((value=>{
               return(
                   <h2 key={value.first}>
                       {value.first}  {value.last} and

                   </h2>
               )
           }))}
            
        </div>
    )
}