import React, { Component }  from 'react';
import {addLocaleData ,IntlProvider} from 'react-intl';
import localeData from './data.json';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
//需要本地化的语言
addLocaleData([...en, ...zh]);
//获取本地语言
/*const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;*/

//const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
//messages data.json 里对应的 语言文本
//const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.zh;

const getBrowserLanguage = () => {
    const browserLanguage = (navigator.language || navigator.browserLanguage);
    const en = "en-US";
    const zh = "zh-CN";
    if (browserLanguage.indexOf("zh") !== -1) {
        return zh
    } else {
        return en
    }
};
const loadLanguage = () => {
    return localStorage.getItem("saved_language") || getBrowserLanguage()
};
const storedLanguage = newLanguage => {
    localStorage.setItem("saved_language", newLanguage)
};

class Translate extends Component {
    constructor(props) {
        super(props);
        this.state={
            language:loadLanguage().toLowerCase().split(/[_-]+/)[0],
            messages:localeData[loadLanguage().toLowerCase().split(/[_-]+/)[0]]
        };
        this.changeLanguage = this.changeLanguage.bind(this);
        //this.getBrowserLanguage = this.getBrowserLanguage.bind(this);
        //this.loadLanguage = this.loadLanguage.bind(this);
        //this.storedLanguage = this.storedLanguage.bind(this);
    }
    changeLanguage = (event)=>{
        event.preventDefault();
       /* this.setState({language:'zh'},()=>{
            this.setState({messages:localeData['zh']})
        })*/
       //this.getBrowserLanguage
        //console.log(loadLanguage());
        if(loadLanguage() ==='zh-CN'){
            /*this.setState({language:'en',messages:localeData['en']},()=>{
                console.log(this.state.language)
            })*/
            storedLanguage('en-US')
        }else{
            /*this.setState({language:'zh',messages:localeData['zh']},()=>{
                console.log(this.state.language)
            })*/
            storedLanguage('zh-CN')
        }
        this.setState({
            language:loadLanguage().toLowerCase().split(/[_-]+/)[0],
            messages:localeData[loadLanguage().toLowerCase().split(/[_-]+/)[0]]
        },()=>{
            console.log("loadLanguage():"+loadLanguage())
            console.log(this.state)
        })


    };

    /*loadLanguage = () => {
        return localStorage.getItem("saved_language") || this.getBrowserLanguage
    };*/

    /*storedLanguage = newLanguage => {
        localStorage.setItem("saved_language", newLanguage)
    };*/

    render() {
        //this.props.Template 父级传来的 this.props.Template
        //console.log(this.state.language)
        //console.log(this.state.messages)
        //console.log(loadLanguage());
        return (
            <div onClick={this.changeLanguage} locale={ this.state.language } messages={ this.state.messages.lang }>

                <h1>i18n</h1>
                <div>{this.state.language}</div>
                { this.state.messages.lang }


                <IntlProvider locale={ this.state.language } messages={ this.state.messages.lang }>
                    <div>sfa</div>

                </IntlProvider>
            </div>
        );
    }
}

export default Translate;