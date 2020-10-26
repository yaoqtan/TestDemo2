import React,{useState,useMemo} from 'react'

function Example7(){
    const [xiaohong,setXiaohone] = useState('jis')
    const [zhiling,setZhiling] = useState('pang')

    return (
        <>
            <button onClick={()=>setXiaohone(new Date().getTime())}>
                jis
            </button>
            <button onClick={()=>setZhiling(new Date().getTime())+'pang'}>
                pang
            </button>
            <ClidComponent name = {xiaohong}><h1>{zhiling}</h1></ClidComponent>
        </>
    )
}

function ClidComponent({name,children}){
    const changeXiaohong=()=>{
        console.log('他来了，他来了')
        return name+',小红向我们走来了'
    }
    const ActionXiaohong=useMemo(()=>changeXiaohong(name),[name])
    return (
        <>
            <div>{ActionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}


export default Example7