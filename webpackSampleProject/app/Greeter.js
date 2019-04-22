import React, {Component} from 'react'
import config from './config.json';
import './greeter.css'

class Greeter extends Component{
  render() {
    return (
      <div className={'greeter'}>
        {config.greetText}
        <h1 className={'h1'}>{config.greetText}</h1>
      </div>
    );
  }
}

export default Greeter