import React,{Component} from 'react';

import store from './store'
//import {CHANGE_INPUT,DELETE_ITEM,ADD_ITEM} from './store/actionTypes'
import {getMyListAction,changeInputAction,addItemAction,deleteItemAction,getTodoList} from './store/actionCreators'
import TodoListUi from './TodoListUi'

import axios from 'axios'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.changeInputValue=this.changeInputValue.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        
        store.subscribe(this.storeChange)
    
    }
    state = store.getState()
    componentDidMount(){
       

        // const aciton = getTodoList()
        // store.dispatch(aciton)

        const action = getMyListAction()
        store.dispatch(action)

    }
   
    changeInputValue(e){
        // const action={
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        // store.dispatch(action)
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
        
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        // const action={
        //     type:ADD_ITEM
        // }
        // store.dispatch(action)
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index){
        // const action={
        //     type:DELETE_ITEM,
        //     index
        // }
        // store.dispatch(action)

        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() { 
        return (
        <>
            <TodoListUi
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                inputplacehoder={this.state.inputplacehoder}
                clickBtn={this.clickBtn}
                List={this.state.List}
                deleteItem={this.deleteItem}
            />
        </> );
    }
}
 
export default TodoList;