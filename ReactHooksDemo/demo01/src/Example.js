import React,{ useState } from 'react';
// class Example extends Component {
//     constructor(props){
//         super(props);
//         this.state={count:0}
//     }
//     render(){
//         return(
//             <>
//                 <p>You clicked {this.state.count}</p>
//                 <button onClick={this.addCount.bind(this)}>
//                     Click me
//                 </button>
//             </>
//         )
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

const Example = (props)=>{
    
    const [count,setCount]=useState(0)//数组结构
    const [obj,setObj]=useState({name:2})
    
    const addCount=()=>{
        setCount(count+1)
        setObj({name:1})
    }
    return (
        <>
            <h1>Example3</h1>
            <p>You clicked {count}{obj.name}</p>
            <button onClick={addCount}>
                Click me
            </button>
        
        </>
    )
}





 export default Example