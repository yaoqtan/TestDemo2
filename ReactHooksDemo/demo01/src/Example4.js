import React,{ useState,createContext,useContext } from 'react';


const CountContext = createContext();

function Counter(){
    let props = useContext(CountContext)
return <><h2>{props.count}</h2><h3>{props.age}</h3></>
}

const Example4 = ()=>{
    
    const [count,setCount]=useState(0)

    const [age]=useState(19)
   
    return (
        <>
            <p>You clicked {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
            <CountContext.Provider value={{count,age}}>
                <Counter/>
            </CountContext.Provider>
        </>
    )
}





 export default Example4