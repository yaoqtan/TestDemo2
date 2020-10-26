import React,{ useState ,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function Index(){
    useEffect(()=>{
        console.log(`useEffect=>Index Comming`)
        return ()=>{
            console.log('Index Out')
        }
    },[])
    return <h1>Index</h1>
}
function List(){
    useEffect(()=>{
        console.log(`useEffect=>List Comming`)
        return ()=>{
            console.log('List Out')
        }
    })
    return <h1>List</h1>
}


// import React ,{Component} from 'react';

// class Example3 extends Component{
//     constructor(props){
//         super(props);
//         this.state={count:0}
//     }
//     componentDidMount(){
//         console.log(`componentDidMount=>You click ${this.state.count}`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=>You click=>${this.state.count}`)
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



const Example3 = (props)=>{
    
    const [count,setCount]=useState(18)
    //useEffect()
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count}`)
        return ()=>{
            console.log(`===============`)
        }
    },[count])
    return (
        <>
            <p>You clicked {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list/">列表</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/"  component={List} />
            </Router>
        </>
    )
}





 export default Example3