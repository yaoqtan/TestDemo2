//const greeter = require('./Greeter.js');
//document.querySelector("#root").appendChild(greeter());
//console.log('22')

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';

import './main.css';

ReactDOM.render(<Greeter/>, document.getElementById('root'));