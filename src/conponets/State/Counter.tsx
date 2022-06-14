import { count } from "console";
import { stat } from "fs";
import { useReducer } from "react";

// type IntialState={
  
//     count:number
// }
// type UpdateAction={
//     type:string
//     payload: number
// }
// type RestAction={
//     type:'reset'
// }

// type CounterAction=UpdateAction | RestAction;

// const initialState = {count: 0};

// function reducer(state:IntialState, action:CounterAction) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + action.payload};
//     case 'decrement':
//       return {count: state.count - action.payload};
//       case 'reset':
//       return initialState
//     default:
//       throw new Error();
//   }

// // or

// //   if (action.type === 'increment'){
// //     return {count: state.count + action.payload};
// //   }
// //   else if (action.type === 'decrement'){
// //       return {count: state.count - action.payload};
// //   }
// //   else if(action.type === 'reset'){
// //       return initialState;

// //   }
// //   else{
// //       throw new Error();
// //   }
// }



// export const Counter=()=>{
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//       <>
      
//         <div> count / {state.count}</div>
//         <button onClick={() => dispatch({type: 'decrement',payload: 10})}>-</button>
//         <button onClick={() => dispatch({type: 'increment' ,payload: 10})}>+</button>
//         <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
//       </>
//     );
// }

type State={
  
   count:number
  
}
type Action={
    type:string
    payLoad:number
   
}
type IntialState={
    count:number
}

const IntialState={count:0}


const reducer=(state:State,action:Action)=>{
switch(action.type){
    case 'increate':
    return {count: state.count + action.payLoad}
    case 'decreate':
        return {count: state.count -action.payLoad}
        case 'reset':
            return {count: 0}    
        default:
            throw new Error();
}
}
export const Counter=()=>{
    
    const [stateCounter, dispatch] = useReducer(reducer,IntialState);
   
    return (
   <div>
    <h5>Count is {stateCounter.count}</h5>
    <button onClick={()=>dispatch({type:'increate',payLoad:10})}>++</button>
    <button onClick={()=>dispatch({type:'decreate',payLoad:10})}>--</button>
    <button onClick={()=>dispatch({type:'reset',payLoad:10})}>Reset</button>
   </div>
    );
}

