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
        window.Yao={
            age:12,
            name:'tan'
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
