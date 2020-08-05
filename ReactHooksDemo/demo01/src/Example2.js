import React,{ useState } from 'react';


const Example2 = (props)=>{
    
    const [age,setAge]=useState(18)
    const [sex,setSex]=useState('男')
    const [work,setWork]=useState('web 前端')

    return (
        <>
            <h1></h1>
            <p>age {age}</p>
            <p>sex: {sex}</p>
            <p>work clicked {work}</p>
        </>
    )
}





 export default Example2