import React,{useRef,useState,useEffect} from 'react'


 function Example8(){
    const inputEl = useRef(null)
    const onButtonClick = ()=>{
        inputEl.current.value='Hello'
        console.log(inputEl)
    }
    const [text,setText] = useState('jspang')
    const textRef = useRef()
    useEffect(()=>{
        textRef.current=text
        console.log(textRef.current)
    })

    return(
        <>
            <input type='text' ref={inputEl}/>
            <button onClick={onButtonClick}>在input 上展示文字</button>
            <br/>
            <br/>
            <input value= {text} onChange={(e)=>setText(e.target.value)}/>
            <div>{text}</div>
        </>
    )
}
export default Example8