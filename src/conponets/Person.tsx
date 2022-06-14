import { PersonPorps } from "./Person.type"

export const Person=(porps:PersonPorps)=>{
    return(
        <div>
            <h2>{porps.name.first}</h2>
            <h2>{porps.name.last}</h2>
        </div>
        
    )
}