import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST,GET_MY_LIST } from './actionTypes'
import axios from 'axios'
export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction=()=>({
    type:ADD_ITEM
})

export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction=(payload)=>({
    type:GET_LIST,
    payload
})

export const getTodoList =()=>{

    return (dispatch)=>{
        axios.get('http://mock-api.com/VLn4JZzx.mock/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)

           // const actions=getListAction(data)
            //store.dispatch(actions)


        })
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})


