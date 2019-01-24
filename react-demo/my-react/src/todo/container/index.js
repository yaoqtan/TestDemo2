import React from 'react'

//import { createStore } from 'redux';


//import reducer from './../reducers'
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList'
import Footer from './../components/Footer'
//const store = createStore(reducer);

//console.log(store.getState());


const Todo = () => (
    <div>
       Todo1
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default Todo