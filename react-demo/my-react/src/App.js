import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Test from './Test/Test';

import {FormattedMessage,addLocaleData ,IntlProvider } from 'react-intl';

import zh_CN from './i18n/locale/zh_CN';
import en_US from './i18n/locale/en_US';

/*import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';

addLocaleData([...en,...zh]);*/
//import intl from 'intl';
import history from  './history'
require('intl')


const getBrowserLanguage = () => {
    const browserLanguage = (navigator.language || navigator.browserLanguage);
    const en = "en-US";
    const zh = "zh-CN";
    console.log(browserLanguage);
    if (browserLanguage.indexOf("zh") !== -1) {
        return zh
    } else {
        return en
    }
};
const loadLanguage = () => {
    return localStorage.getItem("saved_language") || getBrowserLanguage()
    console.log(localStorage.getItem("saved_language"));
};
const storedLanguage = newLanguage => {
    localStorage.setItem("saved_language", newLanguage)
};


class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state={
            messages:this.chooseLocale()
        };
        this.chooseLocale = this.chooseLocale.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
        this.langLocal = this.langLocal.bind(this);
    }
    changeLanguage = (event)=>{
        event.preventDefault();

        if(this.langLocal() ==='zh'){
            localStorage.setItem("saved_language", 'en-US')
        }else{
            localStorage.setItem("saved_language", 'zh-CN')
        }
        this.chooseLocale()
        console.log(this.chooseLocale());
        this.setState({messages:this.chooseLocale()})


    };
    langLocal = ()=>{
        return (localStorage.getItem("saved_language") || navigator.language).toLowerCase().split(/[_-]+/)[0];
    };
    chooseLocale= ()=>{
        switch(this.langLocal()){//navigator.language.split('_')[0]
            case 'en':
                return en_US;
                break;
            case 'zh':
                return zh_CN;
                break;
            default:
                return en_US;
                break;
        }
    };
    onClick=()=>{
        history.push('/fullpage');
    }

  render() {
        const display = {'display':'block'};
    return (
        <IntlProvider locale={this.langLocal()} messages={this.state.messages}>
          <div className="App">
              <a style={display} href="/fullpage">FullPage</a>
              <a style={{'display':'block'}} onClick={this.onClick}>FullPage</a>
              <a style={display} href="/i18nTest">i18nTest</a>
              <a style={display} href="/jqTest">jqTest</a>
              <a style={display} href="/todo">todo</a>
              <a style={display} href="/async">Async</a>
            <header className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <h1 onClick={this.changeLanguage} className="App-title">Welcome to React <FormattedMessage id='hello'/></h1>
            </header>

            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>

              <FormattedMessage
                  id='hello'
                  description='say hello to Howard.'
                  defaultMessage='Hello, {someone}'
              />
              <FormattedMessage
                  id='hello'
              />
              {this.state.messages.people.name}
              <FormattedMessage
                  id='superHello'
                  tagName='h3'
                  values={ {someone : 'yao',some:<h4>13212</h4>}}
              />




              <Test langClick={this.changeLanguage}/>
          </div>
        </IntlProvider>
    );
  }
}

export default App;
