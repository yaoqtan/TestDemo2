import React,{useState,memo} from 'react'


const Child = memo((props) =>{

    console.log('child render...', props.data)
    const [name, setName] = useState(props.data)
    return (
        <div>
            <div>child</div>
            <div>{name} --- {props.data}</div>
        </div>
    );
})

const Example10 =()=>{
    console.log('Hook render...')
    const [count, setCount] = useState(0)
    const [name, setName] = useState('rose')

    return(
        <div>
            <div>
                {count}
            </div>
            <button onClick={()=>setCount(count+1)}>update count </button>
            <button onClick={()=>setName('jack')}>update name </button>
            <Child data={name}/>
            <p>转载：https://juejin.im/post/5e53d9116fb9a07c9070da44</p>
        </div>
    )
}


export default Example10