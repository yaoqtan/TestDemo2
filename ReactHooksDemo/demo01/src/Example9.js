import React ,{ useState,useEffect,useCallback } from 'react'


function useWinSize(){
    const [size,setSize]=useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onReize=useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        console.log(3)
        window.addEventListener('resize',onReize,false)
        return ()=>{
            window.removeEventListener('resize',onReize,false)
        }
    },[])
    return size
}

 const Example9=()=>{
    const size = useWinSize()
    return(
    <div>页面Size:{size.width} x {size.height}</div>
    )
}
export default Example9
