import {CHANGE_INPUT,DELETE_ITEM,ADD_ITEM,GET_LIST} from './actionTypes'

const defaultSate={
    inputValue:"",
    inputplacehoder:'Write Something',
    List:[]
}


export default(state=defaultSate,action) =>{
    //Reducer 里只能接受state,不能改变state
    let newState={};
    switch(action.type){
        case CHANGE_INPUT:
            newState={
                ...state,
                inputValue:action.value
            }
            return newState;
        case ADD_ITEM:
            newState={
                ...state,
                List:state.inputValue?[...state.List,state.inputValue]:[...state.List],
                inputValue:''
            }
            return newState;
        case DELETE_ITEM:
            // newState=JSON.parse(JSON.stringify(state))
            // newState.List.splice(action.index,1)
            newState={
                ...state,
                List:state.List.filter((item,index)=>index !== action.index)
            }
            return newState;
        case GET_LIST:
            newState={
                ...state,
                List:action.payload.data.list
            }
            return newState
        default :
          return state
    }




    //return state
}