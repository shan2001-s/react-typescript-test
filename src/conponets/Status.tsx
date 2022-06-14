type StatusProps={
    message:'error'|'loading'|'success'
}

export const Status=(props:StatusProps)=>{
    let status: any; 
    if(props.message =='loading'){
        status='This is Loading'
    }
    else if(props.message =='error'){
        status="This is error"
    }
    else if(props.message =='success'){
        status="This is success"
    }
  
        return <div>
        <h5>{status}</h5>
    </div>
   
    
}