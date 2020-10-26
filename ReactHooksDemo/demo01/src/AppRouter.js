import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _ from 'lodash'
import App from './App'
import Example from "./Example";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./example6/Example6";
import Example7 from "./Example7";
import Example8 from "./Example8";
import Example9 from "./Example9";
import Example10 from './Example10';
import Ajv from 'ajv'
import './index.css'
const ajv = new Ajv()


console.log(_.reverse([3,4,5,6,9]))

function AppRouter() {
  const test =()=>{
    const isValidate = ajv.validate({ type: 'string' }, true);
    if (!isValidate) {
        console.log(ajv.errors);
        console.log(ajv.errorsText(ajv.errors));
    }

    fetch('/ScriptTitles',{
        method:'GET',
    }).then(function(res){
        console.log(res)
        return res.json();
    }).then(function(data){
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })

   
  }
  const routeConfig =[
    {path:'/',title:'App',exact:true,component:App},
    {path:'/example/',title:'example',exact:false,component:Example},
    {path:'/example2/',title:'example2',exact:false,component:Example2},
    {path:'/example3/',title:'example3',exact:false,component:Example3},
    {path:'/example4/',title:'example4',exact:false,component:Example4},
    {path:'/example5/',title:'example5',exact:false,component:Example5},
    {path:'/example6/',title:'example6',exact:false,component:Example6},
    {path:'/example7/',title:'example7',exact:false,component:Example7},
    {path:'/example8/',title:'example8',exact:false,component:Example8},
    {path:'/example9/',title:'example9',exact:false,component:Example9},
    {path:'/example10/',title:'example10',exact:false,component:Example10}
  ]
  return (
    <Router>
      <div onClick={test.bind(this)}>test</div>
        <ul>
            {
                routeConfig.map((item,index) => {
                    return(
                        <li key={index+'li'}><Link  to={item.path}>{item.title}</Link></li>
                    )
                })
            }
        </ul>
        {
            routeConfig.map((item,index) => {
                return(
                    <Route key={index+'router'} path={item.path} exact component={item.component} />
                )
            })
        }
    </Router>
  );
}

export default AppRouter;