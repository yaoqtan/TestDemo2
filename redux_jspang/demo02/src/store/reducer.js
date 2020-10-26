const defaultState = {
    inputValue:'Hello',
    list:[]
}

export  default (state=defaultState,action)=>{
    let newState={};
    switch(action.type){
        
        case 'change_input':
             newState={
                ...state,
                inputValue:action.value
            }
            return newState
        case 'add_item':
             newState={
                ...state,
                list:[...state.list,state.inputValue]
            }
            console.log(newState)
            return newState
        default:
            return state
    }
}

//react-redux