import React,{useReducer } from 'react';

function ReducerDemo(){
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state +1
            case 'sub':
                return state-1
            default:
                return state
            
        }
    },0)
    return(
        <>
            <h2>现在的分数{count}</h2>
            <button onClick={()=>dispatch('add')}>Increment</button>
            <button onClick={()=>dispatch('sub')}>Decrement</button>
        </>
    )
}

// function countReducer(state,action){
//     switch(action.type){
//         case 'add':
//             return state +1
//         case 'sub':
//             return state-1
//         default:
//             return state
        
//     }
// }


// const Example5 = ()=>{
    
//     const [count,setCount]=useState(0)
   
//     return (
//         <>
//             <p>You clicked {count}</p>
//             <button onClick={()=>setCount(count+1)}>
//                 Click me
//             </button>
           
//         </>
//     )
// }





 export default ReducerDemo