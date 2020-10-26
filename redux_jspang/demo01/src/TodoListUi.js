import React from 'react';

import { Input,Button ,List} from "antd"
import 'antd/dist/antd.css'
const TodoListUi =(props)=>{
    return(
        <>
            <div style={{margin:"20px"}}>
                <Input 
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                    style={{width:'250px', marginRight:'10px'}} 
                    placeholder={props.inputplacehoder} />
                <Button onClick={props.clickBtn} type="primary">增加</Button>
            </div>
            <div style={{margin:'20px',width:'500px'}}>
                <List bordered
                dataSource={props.List}
                renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        
        </>)
}
export default TodoListUi;