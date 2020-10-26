import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ajv from 'ajv'
const ajv = new Ajv()

function Index() {
  return <h2>JSPang.com</h2>;
}

function List() {
  return <h2>List-Page</h2>;
}

function AppRouter() {
  const test =()=>{
    const isValidate = ajv.validate({ type: 'string' }, 123);
    if (!isValidate) {
        console.log(ajv.errors);
        console.log(ajv.errorsText(ajv.errors));
    }
  }
  return (
    <Router>
      <div onClick={test.bind(this)}>test</div>
        <ul>
            <li> <Link to="/">首页</Link> </li>
            <li><Link to="/list/">列表</Link> </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
    </Router>
  );
}
export default AppRouter;