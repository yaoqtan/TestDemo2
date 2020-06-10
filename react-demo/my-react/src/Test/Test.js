import React, { Component } from 'react';

import Img from '../image/Email.pdf';
import doc from '../image/Orgchart.doc';
import Fetch from './test.json';
import Translate from './../i18n/Translate'
import { FormattedMessage } from 'react-intl';
import './test.css';

class Test extends Component {
    constructor(props) {
        super(props);
        //console.log(props)
        this.apiFetch=this.apiFetch.bind(this);
        this.onChange=this.onChange.bind(this);
        this.debounce=this.debounce.bind(this);
        window.Yao={
            age:12,
            name:'tan'
        }
        this.state={
            value:''
        }

    }
    componentDidMount(){
        //this.apiFetch();
    }
    componentWillMount(){
        this.apiFetch()
    }
    apiFetch = ()=>{
        console.log(typeof Fetch)
        fetch('https://api.github.com/users/octocat/gists',{
            method:"GET",
            headers : { // 请求头（可以是Headers对象，也可是JSON对象）
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }).then(
            (response) => response.json()
                .then((data) => console.log(data))
                .catch((e) => console.log('Oops,error'))
        );
    };
    onChange=(value)=>{
        this.debounce(()=>{
            console.log(value.target.value)
        },1000)

        this.setState({value:value.target.value})




    }
    debounce=(fn, delay)=> {
        // 定时器
        let timer = null

        // 将debounce处理结果当作函数返回
        return function () {
            // 保留调用时的this上下文
            let context = this
            // 保留调用时传入的参数
            let args = arguments

            // 每次事件被触发时，都去清除之前的旧定时器
            if(timer) {
                clearTimeout(timer)
            }
            // 设立新定时器
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }

    render() {
        const divTabel={
            width:'100%',
            height:'200px',
            overflow:'auto',
            margin:'30px'

        };
        const Tabel={
            width:'2000px',
            height:'2000px',
            background:"red"

        };

        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange}/>
                <div><a href = {Img}>pdf</a></div>
                <a href = {doc}>doc</a>
                <h1>Test</h1>
                <a onClick={this.apiFetch}>apiFetch</a>
                <Translate/>
                {/*<div>{this.props.messages.name}</div>*/}
                <FormattedMessage id='hello'/>
                <h1 onClick={this.props.langClick}>语言</h1>
                <div style={divTabel} className={'divTable'}>
                    <table style={Tabel}></table>
                </div>
                <div className="main">

                </div>
                <div className="footer"></div>



            </div>

        );
    }
}

export default Test;
