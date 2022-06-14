type ListProps<T>={
    Lists:T[] ,
    onClick:(value: T) =>void
}

export const List = <T extends {id:number, name:string} > ({Lists,onClick,}:ListProps<T>)=>{
    return(
        <div>
            <h1>This are Lists</h1>
            {Lists.map((list,index)=>{
                return(
                  
                    // <div key={list.id} onClick={()=>onClick(list)}> {list} </div>

                    <div key={list.id} onClick={()=> onClick(list)}> 
                        {list.name}
                    </div>
                )
            })}
        </div>
    );
}