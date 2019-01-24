import React, { Component } from 'react';
import $ from 'jquery';
import './scroll.css'


class Scroll extends Component {
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
            <div className={'content'}>
                <div className={'main'}>
                    <div className="wrap">
                    <ul>
                        <li className="li1">1</li>
                        <li className="li2">2</li>
                        <li className="li3">3</li>
                        <li className="li4">4</li>
                        <li className="li5">5</li>
                        <li className="li6">6</li>
                        <li className="li7">7</li>
                        <li className="li8">8</li>
                        <li className="li9">9</li>
                        <li className="li10">10</li>

                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scroll;
