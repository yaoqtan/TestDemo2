import {takeEvery,put} from 'redux-saga/effects' 
import {GET_MY_LIST} from './actionTypes'
import axios from 'axios'
import {getListAction} from './actionCreators'

 function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}
function* getList(){
    // axios.get('http://mock-api.com/VLn4JZzx.mock/getList').then((res)=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     put(action)
    // })
    const res = yield axios.get('http://mock-api.com/VLn4JZzx.mock/getList')
    const action = getListAction(res.data)
    yield put(action)
}
export default mySaga