import React, { Component } from 'react';
import $ from 'jquery';
//import {JqueryScrollTo} from 'js/jquery.scroll_to';
//import {JqueryScrollSnapscroll} from 'js/jquery.snapscroll'


class JqTest extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
        console.log($(window).width())
        //console.log(JqueryScrollTo);
        //console.log(JqueryScrollSnapscroll);


    }
    componentDidMount(){
        //console.log($(".content").snapscroll())
    }

    render() {
        return (
           <div className={'content'}></div>
        );
    }
}

export default JqTest;
